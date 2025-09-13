# College Connections

A web application for college students to find connections and opportunities based on their major, track, and college.

## Features

- **User Authentication**: Sign up and login with profile management
- **Extracurricular Activities**: Browse clubs and organizations relevant to your major/track
- **Opportunities**: Find local internships, volunteering, and research opportunities
- **Contacts Directory**: Access faculty, staff, and administrators at your college
- **Smart Filtering**: Automatic filtering based on your profile (college, major, track, location)

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development)
- **Authentication**: NextAuth.js
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/college-connections.git
   cd college-connections
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables**:
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your secret key:
   ```
   NEXTAUTH_SECRET=your-random-secret-key-here
   ```

4. **Setup the database**:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:3000`

## Demo Account

For testing purposes, you can use:
- **Email**: demo@example.com
- **Password**: demo123

## Project Structure

```
college-connections/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── dashboard/      # Dashboard page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   └── lib/               # Utility libraries
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts           # Sample data
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.