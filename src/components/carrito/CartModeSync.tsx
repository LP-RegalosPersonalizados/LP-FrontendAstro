import { useEffect } from 'react';
import { useCart, type CartMode } from '../../store/useCart';

interface Props {
  mode: CartMode;
}

/**
 * Invisible component that syncs the cart mode with the current page.
 * Used on the /empresas page to switch the cart to "business" mode.
 */
export default function CartModeSync({ mode }: Props) {
  const setMode = useCart((s) => s.setMode);

  useEffect(() => {
    setMode(mode);
    return () => {
      // Reset to general when leaving the page
      setMode('general');
    };
  }, [mode, setMode]);

  return null;
}
