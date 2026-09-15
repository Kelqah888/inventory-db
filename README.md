# Inventory Database

An interactive web-based inventory management system for tracking products by name, IMEI number, and SKU.

## Features

- 📊 **170 pre-loaded products** (A376, A576, and A17 models)
- 🔍 **Search functionality** - Find products by name, IMEI, or SKU
- ✏️ **Edit products** - Update product information
- ➕ **Add new products** - Add items to your inventory
- 🗑️ **Delete products** - Remove items from the database
- 📱 **Responsive design** - Works on desktop and mobile

## Quick Start (Local Development)

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Install & Run

```bash
# Clone or download this project
cd inventory-db

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## Deploy to Vercel (Recommended)

Vercel is free, fast, and perfect for React apps.

### Step 1: Create a GitHub Account
If you don't have one, sign up at https://github.com

### Step 2: Push Code to GitHub

```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub at github.com/new
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/inventory-db.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Deploy with Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Click **"New Project"**
5. Select the **`inventory-db`** repository
6. Click **"Deploy"** (use default settings)

✅ **Done!** Your app is now live. Vercel will give you a URL like `https://inventory-db-xyz.vercel.app`

### Automatic Updates
Every time you push code to GitHub, Vercel automatically redeploys your site.

---

## Deploy to Netlify (Alternative)

1. Go to https://netlify.com
2. Click **"Sign up"** → Choose **"GitHub"**
3. Authorize and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click **"Deploy"**

---

## Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` folder ready to deploy anywhere.

---

## File Structure

```
inventory-db/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Styling
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies
└── README.md               # This file
```

---

## Customization

### Change Initial Products
Edit the `initialProducts` array in `src/App.js` to add/remove products.

### Modify Styling
Update colors and layout in `src/App.css`.

### Change App Title
Edit the title in `public/index.html` and the `<title>` tag.

---

## Troubleshooting

**"npm: command not found"**
- Install Node.js from https://nodejs.org

**Port 3000 already in use**
```bash
npm start -- --port 3001
```

**Deployment fails on Vercel**
- Make sure `package.json` is in the root folder
- Ensure all files are committed to GitHub

---

## Features Roadmap

- [ ] Database backend (save data permanently)
- [ ] User authentication
- [ ] Export to CSV/Excel
- [ ] Barcode scanning
- [ ] Multiple inventory locations

---

## License

MIT - Free to use and modify

---

## Support

Need help? Check these resources:
- React Docs: https://react.dev
- Vercel Docs: https://vercel.com/docs
- GitHub Help: https://docs.github.com
