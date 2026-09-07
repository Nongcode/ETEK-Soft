import TopBar from "@/components/layout/TopBar";
import MainNav from "@/components/layout/MainNav";
import AuthModal from "@/components/layout/AuthModal";

export default function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 w-full">
        <MainNav />
      </header>
      <AuthModal />
    </>
  );
}

