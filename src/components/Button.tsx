interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="flex justify-center py-5 rounded-lg bg-green-500 text-sm font-semibold text-white transition hover:bg-green-300">
      {text}
    </button>
  );
}
