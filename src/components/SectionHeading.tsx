interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ subtitle, title, description, light, center = true }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-14 lg:mb-18`}>
      {subtitle && (
        <span className="inline-block text-gold font-semibold text-xs tracking-[0.2em] uppercase mb-4">
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${light ? 'text-white' : 'text-emerald-deep'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
