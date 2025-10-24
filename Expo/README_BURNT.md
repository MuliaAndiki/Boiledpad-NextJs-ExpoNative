# 🔥 Burnt Alert System - Quick Start

## ✅ Update Complete!

Custom alert Anda sekarang menggunakan **Burnt** - toast library terbaik untuk React Native!

## 📦 Installation

**PENTING:** Jalankan command ini terlebih dahulu:

```bash
pnpm add burnt
```

atau

```bash
npm install burnt
# atau
yarn add burnt
```

## 🚀 Usage (Super Simple!)

### 1. Import Hook
```tsx
import { useAlert } from "@/hooks/useAlert/costum-alert";
```

### 2. Toast Notification
```tsx
const { toast } = useAlert();

toast({
  title: "Berhasil!",
  message: "Data tersimpan",
  icon: "success"  // success | error | warning | info | question
});
```

### 3. Alert Modal
```tsx
const { modal } = useAlert();

modal({
  title: "Konfirmasi",
  deskripsi: "Yakin ingin hapus?",
  icon: "warning",
  confirmButtonText: "Hapus",
  confirmButtonColor: "destructive",
  onConfirm: () => console.log("Deleted!")
});
```

### 4. Async Confirm
```tsx
const { confirm } = useAlert();

const result = await confirm({
  title: "Hapus Data",
  deskripsi: "Tidak bisa dibatalkan",
  icon: "question"
});

if (result) {
  // User confirmed
}
```

## 🎯 Test Demo

Copy demo component ke screen Anda:

```tsx
import BurntAlertDemo from "@/components/examples/BurntAlertDemo";

export default function TestScreen() {
  return <BurntAlertDemo />;
}
```

## ✨ Features

| Feature | Status |
|---------|--------|
| Native iOS/Android look | ✅ |
| Haptic feedback | ✅ |
| Smooth animations | ✅ |
| Dark/Light mode | ✅ |
| TypeScript support | ✅ |
| Zero config | ✅ |

## 🎨 Icon Types

```tsx
"success"   → ✅ (with success haptic)
"error"     → ❌ (with error haptic)
"warning"   → ⚠️ (with warning haptic)
"info"      → ℹ️ (no haptic)
"question"  → ❓ (no haptic)
```

## 📖 Full Documentation

- **BURNT_ALERT_GUIDE.md** → Dokumentasi lengkap dengan contoh
- **components/examples/BurntAlertDemo.tsx** → Demo component

## 🗑️ File yang Bisa Dihapus

File ini sudah tidak dipakai (diganti Burnt):
- ❌ `core/components/alert-toast.tsx`

## 🎉 That's It!

Install Burnt, lalu langsung pakai!

```bash
pnpm add burnt
```

```tsx
import { useAlert } from "@/hooks/useAlert/costum-alert";

const { toast, modal, confirm } = useAlert();
```

---

**Happy Coding! 🚀**
