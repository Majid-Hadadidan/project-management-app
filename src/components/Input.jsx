export default function Input({ textArea, label, ...props }) {
  const classes =
    "w-full p-1  border-b-2 border-stone-300 bg-stone-200 text-stone-600 rounded-sm focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col  px-1 gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textArea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}