import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.tbm_user.create({
      data: createUserDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 10, search, sortBy = 'created_at', sortOrder = 'desc' } = paginationDto;
    const skip = (page - 1) * limit;

    const where = {
      is_deleted: false,
      ...(search && {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { full_name: { contains: search, mode: 'insensitive' } },
          { username: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const [users, total] = await Promise.all([
      this.prisma.tbm_user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        select: {
          id: true,
          email: true,
          username: true,
          full_name: true,
          avatar: true,
          email_verified: true,
          created_at: true,
          updated_at: true,
        },
      }),
      this.prisma.tbm_user.count({ where }),
    ]);

    return {
      data: users,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const user = await this.prisma.tbm_user.findUnique({
      where: { id, is_deleted: false },
      select: {
        id: true,
        email: true,
        username: true,
        full_name: true,
        avatar: true,
        email_verified: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    return this.prisma.tbm_user.update({
      where: { id },
      data: {
        ...updateUserDto,
        updated_at: new Date(),
      },
      select: {
        id: true,
        email: true,
        username: true,
        full_name: true,
        avatar: true,
        email_verified: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    return this.prisma.tbm_user.update({
      where: { id },
      data: {
        is_deleted: true,
        updated_at: new Date(),
      },
    });
  }
}