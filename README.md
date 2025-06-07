
# Gryphon Academy CRM

A modern, sleek CRM web application designed specifically for training and placement institutes in India. Built with React and Firebase, featuring a comprehensive suite of tools to manage students, employers, and placement processes.

## 🚀 Features

### Core Modules
- **Student Management**: Comprehensive database with profiles, resumes, skills tracking
- **Employer Relations**: Contact management, job postings, communication history
- **Interview Scheduling**: Calendar-based scheduling with automated reminders
- **Analytics Dashboard**: Real-time placement statistics and performance metrics
- **Resume Bank**: Centralized repository with intelligent matching
- **Communication Hub**: Bulk messaging and feedback collection

### Technical Features
- Modern React with JavaScript (no TypeScript)
- Firebase Authentication and Firestore integration
- Responsive mobile-first design with Tailwind CSS
- Protected routes with role-based access
- Real-time data synchronization
- Modern gradient UI inspired by top AI SaaS products

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 16+ and npm
- Firebase project with Authentication and Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gryphon-academy-crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication (Email/Password provider)
   - Enable Firestore Database
   - Copy your Firebase config from Project Settings
   - Update `src/firebase/config.js` with your Firebase configuration:

   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "your-app-id"
   };
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Create test user account**
   - Go to Firebase Console > Authentication > Users
   - Add a test user with email: `admin@gryphon.com` and password: `password123`
   - Or use the demo credentials provided in the login form

## 🔧 Firebase Setup Details

### Authentication Rules
Enable Email/Password authentication in your Firebase console:
- Go to Authentication > Sign-in method
- Enable Email/Password provider

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Firestore Database Structure
```
/students
  - id (auto-generated)
  - name, email, phone, skills, batch
  - resume_url, training_progress
  - created_at, updated_at

/employers
  - id (auto-generated)
  - company_name, contact_person, email
  - industry, location, requirements
  - created_at, updated_at

/jobs
  - id (auto-generated)
  - title, company_id, requirements
  - salary_range, location, status
  - created_at, updated_at

/interviews
  - id (auto-generated)
  - student_id, job_id, employer_id
  - scheduled_date, status, feedback
  - created_at, updated_at
```

## 🚀 Deployment

### Firebase Hosting
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Initialize Firebase hosting**
   ```bash
   firebase init hosting
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

## 📱 Usage

### Authentication Flow
- Landing page automatically redirects authenticated users to dashboard
- Login with email/password authentication
- Protected routes ensure secure access to CRM features

### Dashboard Features
- Overview statistics and metrics
- Quick action buttons for common tasks
- Recent activities feed
- Navigation to all major modules

### Demo Credentials
- Email: `admin@gryphon.com`
- Password: `password123`

## 🎨 Design System

The application uses a modern design system with:
- Gradient backgrounds and contemporary UI elements
- Tailwind CSS for responsive, mobile-first design
- Inter font family for clean typography
- Blue to purple gradient theme
- Smooth animations and transitions

## 📋 Development Guidelines

### Code Organization
- Modular React components in `/src/components`
- Page components in `/src/pages`
- Firebase configuration in `/src/firebase`
- Authentication context in `/src/contexts`

### Best Practices
- All components use JavaScript (no TypeScript)
- Responsive design with mobile-first approach
- Proper error handling and loading states
- Clean, maintainable code structure

## 🔗 Key Dependencies

- **React 18**: Core framework
- **React Router DOM**: Client-side routing
- **Firebase 10**: Backend services (Auth + Firestore)
- **Tailwind CSS**: Styling framework

## 📞 Support

For support and questions:
- Email: info@gryphonacademy.com
- Phone: +91 98765 43210
- Location: Mumbai, Maharashtra, India

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for Gryphon Academy by the development team.
