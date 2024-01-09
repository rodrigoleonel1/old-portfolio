export default function IconLink({ icon: Icon, className, type, ...props }) {
  return (
    <a
      className={`
        px-2 py-1
        flex place-items-center gap-1  
        text-emerald-400 bg-emerald-100/60
        cursor-pointer rounded-md 
        dark:bg-emerald-950 ${className}`}
      {...props}
    >
      <Icon size={26} />
      <span>{type}</span>
    </a>
  );
}
