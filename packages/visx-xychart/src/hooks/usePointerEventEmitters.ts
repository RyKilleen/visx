import { useCallback } from 'react';
import useEventEmitter from './useEventEmitter';

type PointerEventEmitterParams = {
  /** Source of the events, e.g., the component name. */
  source: string;
  onPointerMove?: boolean;
  onPointerOut?: boolean;
  onPointerUp?: boolean;
};

/**
 * A hook that simplifies creation of handlers for emitting
 * pointermove, pointerout, and pointerup events to EventEmitterContext.
 */
export default function usePointerEventEmitters({
  source,
  onPointerOut = true,
  onPointerMove = true,
  onPointerUp = true,
}: PointerEventEmitterParams) {
  const emit = useEventEmitter();

  const emitPointerMove = useCallback(
    (event: React.PointerEvent) => emit?.('pointermove', event, source),
    [emit, source],
  );
  const emitPointerOut = useCallback(
    (event: React.PointerEvent) => emit?.('pointerout', event, source),
    [emit, source],
  );
  const emitPointerUp = useCallback(
    (event: React.PointerEvent) => emit?.('pointerup', event, source),
    [emit, source],
  );

  return {
    onPointerMove: onPointerMove ? emitPointerMove : undefined,
    onPointerOut: onPointerOut ? emitPointerOut : undefined,
    onPointerUp: onPointerUp ? emitPointerUp : undefined,
  };
}
