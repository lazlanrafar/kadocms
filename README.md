# Turborepo with Supabase Authentication

This is a monorepo setup with NestJS API, Next.js web app, and Supabase authentication integrated with Prisma database.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

    .
    ├── apps
    │   ├── api                       # NestJS app with Supabase auth
    │   └── web                       # Next.js app with auth UI
    └── packages
        ├── @repo/auth                # Shared authentication logic
        ├── @repo/api                 # Shared NestJS resources
        ├── @repo/database            # Prisma database client
        ├── @repo/eslint-config       # ESLint configurations
        ├── @repo/jest-config         # Jest configurations
        └── @repo/typescript-config   # TypeScript configurations

## Getting Started

### Prerequisites

1. **Supabase Project**: Create a new project at [supabase.com](https://supabase.com)
2. **PostgreSQL Database**: Set up your database (can use Supabase's built-in database)

### Environment Setup

1. **API Environment Variables** (`apps/api/.env`):
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
JWT_SECRET=your_jwt_secret_key
```

2. **Web Environment Variables** (`apps/web/.env.local`):
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Installation & Setup

1. **Install dependencies**:
```bash
pnpm install
```

2. **Set up the database**:
```bash
cd packages/database
pnpm prisma generate
pnpm prisma db push
```

3. **Build packages**:
```bash
pnpm build
```

4. **Start development servers**:
```bash
pnpm dev
```

This will start:
- API server at `http://localhost:3000`
- Web app at `http://localhost:3001`

## Authentication Flow

### Architecture

1. **Supabase Auth**: Handles user authentication and session management
2. **NestJS API**: Validates tokens and manages user data in Prisma
3. **Next.js Web**: Provides authentication UI and protected routes
4. **Prisma Database**: Stores user profiles and application data

### Features

- ✅ Email/Password authentication
- ✅ JWT token validation
- ✅ User profile management
- ✅ Protected routes
- ✅ Automatic user sync between Supabase and Prisma
- ✅ TypeScript throughout

### API Endpoints

- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Sign in user
- `POST /auth/signout` - Sign out user
- `GET /auth/me` - Get current user profile
- `GET /auth/verify` - Verify JWT token

### Web Routes

- `/login` - Sign in page
- `/signup` - Sign up page
- `/dashboard` - Protected dashboard (requires auth)

## Development

### Adding New Features

1. **Shared Types**: Add to `packages/auth/src/types/`
2. **API Endpoints**: Add to `apps/api/src/`
3. **Web Components**: Add to `apps/web/components/`
4. **Database Changes**: Update `packages/database/prisma/schema.prisma`

### Testing

```bash
# Run all tests
pnpm test

# Run API tests
cd apps/api && pnpm test

# Run e2e tests
pnpm test:e2e
```

### Linting & Formatting

```bash
# Lint all packages
pnpm lint

# Format code
pnpm format
```

## Deployment

### API Deployment

1. Set environment variables on your hosting platform
2. Run database migrations: `pnpm prisma migrate deploy`
3. Build and deploy: `pnpm build && pnpm start`

### Web Deployment

1. Set environment variables (Vercel, Netlify, etc.)
2. Build and deploy: `pnpm build`

## Troubleshooting

### Common Issues

1. **Database Connection**: Ensure `DATABASE_URL` is correct
2. **Supabase Config**: Verify Supabase URL and keys
3. **CORS Issues**: Check API CORS settings for web app domain
4. **Token Validation**: Ensure JWT_SECRET matches between services

### Useful Commands

```bash
# Reset database
cd packages/database && pnpm prisma migrate reset

# View database
cd packages/database && pnpm prisma studio

# Generate Prisma client
cd packages/database && pnpm prisma generate
```

## Learn More

- [Turborepo Documentation](https://turborepo.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [NestJS Documentation](https://docs.nestjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)