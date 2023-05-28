

export function clickOut(node: HTMLElement, callback: () => void) {
  const handleClick = (event: MouseEvent) => {
    // return if node is null
    if (!node) return;

    // return if target is inside node
    if (node.contains(event.target as Node)) return;

    // return if event default has been prevented
    if (event.defaultPrevented) return;

    // call callback
    callback();
  };

  const destroy = () =>
    document.removeEventListener('click', handleClick, true);
    document.   addEventListener('click', handleClick, true);

  return { destroy };
}
