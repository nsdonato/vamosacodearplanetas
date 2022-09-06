interface LayoutProps {
  planetName: string;
}

// TODO: Layout components
export const Layout = ({ planetName = "jupiter" }: LayoutProps) => {
  return (
    <main className="h-screen flex justify-center items-center">
      <p className="text-white">
        Acá va a haber un hermoso layout del planeta: {planetName}
      </p>
    </main>
  );
};
