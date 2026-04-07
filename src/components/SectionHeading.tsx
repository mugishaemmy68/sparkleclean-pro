interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ subtitle, title, description, light, center = true }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}>
      {subtitle && (
        <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-emerald-deep'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
