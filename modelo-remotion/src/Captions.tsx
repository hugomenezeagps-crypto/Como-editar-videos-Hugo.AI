import React from 'react';
import {prog, easeOut} from './lib';
import {C, FONTE, PESO_FORTE} from './tema';
import {GROUPS, CAP_END} from './words';
// Legenda palavra por palavra: cada palavra sai do desfoque no instante exato em que é dita.
export const Captions: React.FC<{t: number}> = ({t}) => {
  const endOf = (i: number) => Math.min((GROUPS[i + 1]?.[0].t ?? CAP_END) - 0.04, GROUPS[i][GROUPS[i].length - 1].t + 1.1);
  const gi = GROUPS.findIndex((g, i) => t >= g[0].t - 0.04 && t < endOf(i));
  if (gi < 0) return null;
  const g = GROUPS[gi];
  const end = endOf(gi);
  const nextStart = (GROUPS[gi + 1]?.[0].t ?? CAP_END) - 0.04;
  const out = end < nextStart - 0.01 ? prog(t, end - 0.25, end, easeOut) : 0;
  return (
    <div style={{position: 'absolute', left: 100, right: 100, top: 1598, height: 110, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, opacity: 1 - out}}>
      {g.map((c, i) => {
        const p = prog(t, c.t - 0.04, c.t + 0.18, easeOut);
        return (
          <span
            key={i}
            style={{
              fontFamily: FONTE,
              fontWeight: PESO_FORTE,
              fontSize: 66,
              letterSpacing: '-0.02em',
              color: c.gold ? C.destaque : C.texto,
              opacity: p,
              filter: `blur(${(1 - p) * 10}px)`,
              transform: `translateY(${(1 - p) * 14}px) scale(${0.92 + 0.08 * p})`,
              display: 'inline-block',
            }}
          >
            {c.w}
          </span>
        );
      })}
    </div>
  );
};
