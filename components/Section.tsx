interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`mx-1 px-4 sm:px-6 lg:px-8 py-16 md:py-24 rounded-3xl my-1 bg-background/95 backdrop-blur ${className}`}>
      {children}
    </section>
  )
}
