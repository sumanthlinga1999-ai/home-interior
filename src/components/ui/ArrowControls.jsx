export default function ArrowControls({onPrevious,onNext,label='slider'}) {
  return <div className="arrows" aria-label={`${label} controls`}><button type="button" onClick={onPrevious} aria-label={`Previous ${label}`}>←</button><button type="button" onClick={onNext} aria-label={`Next ${label}`}>→</button></div>;
}
