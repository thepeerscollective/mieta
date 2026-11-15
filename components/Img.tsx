import { img } from '@/lib/base';

export default function Img({ n, alt, arch, ratio, eager, className = '' }: { n: string; alt: string; arch?: boolean; ratio?: string; eager?: boolean; className?: string }) {
  return (
    <div className={`ph${arch ? ' arch' : ''} ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={img(n)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </div>
  );
}
