interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`mx-1 max-w-7xl px-4 sm:px-6 sm:mx-4 lg:px-8 py-16 md:py-24 rounded-2xl my-4 bg-background/95 backdrop-blur ${className}`}>
      {children}
    </section>
  )
}
