export default function Footer() {
    return (
        <footer className="w-full bg-primary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center py-8">
                    <p className="text-white">&copy; {new Date().getFullYear()} Divergent Technologoies Phils Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
            