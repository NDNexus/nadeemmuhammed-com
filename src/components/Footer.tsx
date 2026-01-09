export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Nadeem Muhammed. All rights reserved.
            </div>
        </footer>
    );
}
