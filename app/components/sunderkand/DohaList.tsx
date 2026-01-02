import type { Doha } from '@/app/types';
import { DohaCard } from './DohaCard';

interface DohaListProps {
  data: Doha[];
}

export function DohaList({ data }: DohaListProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {data.map((doha, index) => (
          <div 
            key={doha.dohaNumber} 
            id={`doha-${doha.dohaNumber}`} 
            className="scroll-mt-20"
          >
            <DohaCard data={doha} index={index} />
          </div>
        ))}
      </div>
    </main>
  );
}
