import MenuPrincipal from "@/components/MenuPrincipal";

export function LayoutPrincipal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <MenuPrincipal />
        <div className="content">
            {children}
        </div>
    </>
  );
}
