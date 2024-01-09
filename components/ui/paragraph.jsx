export default function Paragraph({ children, className }) {
  return (
    <p className={`text-zinc-600 dark:text-zinc-400 ${className}`}>
        {children}
    </p>
  )
}
