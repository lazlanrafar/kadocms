import { prisma } from '@repo/database';
import { AuthUser } from '../types/auth.types';

export class UserService {
  async createOrUpdateUser(authUser: AuthUser) {
    try {
      const user = await prisma.tbm_user.upsert({
        where: {
          email: authUser.email,
        },
        update: {
          email_verified: authUser.email_verified || false,
          username: authUser.username,
          full_name: authUser.full_name,
          avatar: authUser.avatar,
          updated_at: new Date(),
        },
        create: {
          email: authUser.email,
          email_verified: authUser.email_verified || false,
          username: authUser.username,
          full_name: authUser.full_name,
          avatar: authUser.avatar,
        },
      });

      return user;
    } catch (error) {
      console.error('Error creating/updating user:', error);
      throw new Error('Failed to create or update user');
    }
  }

  async getUserByEmail(email: string) {
    try {
      return await prisma.tbm_user.findUnique({
        where: { email },
      });
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw new Error('Failed to fetch user');
    }
  }

  async getUserById(id: string) {
    try {
      return await prisma.tbm_user.findUnique({
        where: { id },
      });
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw new Error('Failed to fetch user');
    }
  }

  async deleteUser(id: string) {
    try {
      return await prisma.tbm_user.update({
        where: { id },
        data: {
          is_deleted: true,
          updated_at: new Date(),
        },
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  }
}