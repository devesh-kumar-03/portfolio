type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
      {children}
    </button>
  );
}