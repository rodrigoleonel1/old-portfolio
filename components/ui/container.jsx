export default function Container({ children, className }) {
    return (
      <section
        className={`mx-auto w-full max-w-3xl px-5 mt-12 ${className}`}
      >
        {children}
      </section>
    );
  }
  