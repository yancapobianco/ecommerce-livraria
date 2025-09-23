import FooterComponente from "@/components/FooterComponente";
import MenuComponente from "@/components/MenuComponente";

export function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layoutGrid">
        <MenuComponente />
        <div>
        <div className="conteudoPage">
            {children}
        </div>
        <FooterComponente />
        </div>
    </div>
  );
}
