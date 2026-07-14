# Development Workflow

This document defines the development workflow for **nadeemmuhammed.com**.

# Daily Startup Checklist

Before writing any code:

```bash
git status
```

---

# Branch Strategy

## Production

- Branch: `main`
- Domain: `https://nadeemmuhammed.com`

This branch should always contain a stable, production-ready website.

**Never develop directly on `main`.**

---

## Beta (Staging)

- Branch: `beta`
- Domain: `https://beta.nadeemmuhammed.com`

This is the primary development branch.

All new work happens here first.

---

# Daily Development Workflow

## 1. Check current branch

```bash
git status
```

Expected:

```
On branch beta
```

If not:

```bash
git switch beta
```

---

## 2. Pull latest beta

```bash
git pull
```

---

## 3. Develop

- Build features
- Fix bugs
- Refactor
- Improve styling
- Commit often

---

## 4. Commit changes

```bash
git add .
git commit -m "feat: describe the change"
```

Examples:

```
feat: add services section
fix: improve mobile navigation
refactor: simplify token naming
docs: update README
style: improve typography spacing
```

---

## 5. Push beta

```bash
git push
```

This automatically updates:

```
beta.nadeemmuhammed.com
```

---

## 6. Test thoroughly

Verify:

- Navigation
- Mobile responsiveness
- Desktop responsiveness
- Typography
- Images
- SEO metadata
- Performance
- Console errors
- Build succeeds

If anything is broken:

Fix it on beta.

Repeat steps 3–6 until satisfied.

---

# Production Release Checklist

Before merging to production, confirm ALL of the following.

## Git

- [ ] Current branch is `beta`
- [ ] Working tree is clean (`git status`)
- [ ] All work committed
- [ ] Latest changes pushed

---

## Functionality

- [ ] No console errors
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Build succeeds

```bash
npm run build
```

---

## UI Review

- [ ] Homepage looks correct
- [ ] Navigation works
- [ ] Footer works
- [ ] Responsive on mobile
- [ ] Responsive on desktop
- [ ] Images load correctly
- [ ] Dark/light mode (if applicable)

---

## SEO

- [ ] Title correct
- [ ] Description correct
- [ ] Open Graph image
- [ ] robots.txt
- [ ] sitemap.xml

---

## Accessibility

- [ ] Images have alt text
- [ ] Buttons are accessible
- [ ] Keyboard navigation works
- [ ] Color contrast acceptable

---

# Release to Production

Switch to production.

```bash
git switch main
```

Merge beta.

```bash
git merge beta
```

Push production.

```bash
git push
```

This updates:

```
https://nadeemmuhammed.com
```

---

# After Release

Return to development.

```bash
git switch beta
```

Continue building.

---

# Emergency Rollback

If production is broken:

View history.

```bash
git log --oneline
```

Rollback.

```bash
git revert <commit>
git push
```

Avoid force pushing to production.

---

# Personal Rules

✅ Develop only on `beta`.

✅ Keep `main` production-ready.

✅ Commit frequently.

✅ Test on beta before release.

✅ Build before every release.

✅ Push to production only when confident.

---

# Philosophy

Beta is the workshop.

Production is the showroom.

Never build furniture in the showroom.
