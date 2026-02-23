import './step-badge.scss';

type StepBadgeProps = {
  value: number | string;
  className?: string;
};

function formatValue(value: number | string) {
  if (typeof value === 'number') return String(value).padStart(2, '0');
  return value;
}

export default function StepBadge({ value, className }: StepBadgeProps) {
  return (
    <span
      className={['step-badge', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      {formatValue(value)}
    </span>
  );
}
