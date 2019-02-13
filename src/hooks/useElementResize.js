import { useEffect, useState } from 'react';

function useElementResize(ref, options) {
  const [offset, setOffset] = useState(options.offset);
  const [size, setSize] = useState(options.size);
  useCursor(ref, options.resizeThreshold, options.resizable);
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const { resizable = true, resizeThreshold = 10 } = options;
    const dragTarget = options.dragRef && options.dragRef.current;
    const previousOffset = { ...offset };
    const previousSize = { ...size };
    let originMouseX;
    let originMouseY;

    function onDragging(e) {
      const { pageX, pageY } = e;
      const x = pageX - originMouseX + previousOffset.x;
      const y = pageY - originMouseY + previousOffset.y;
      setOffset({ x, y });
    }
    function onDragEnd(e) {
      previousOffset.x += e.pageX - originMouseX;
      previousOffset.y += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onDragging);
      window.removeEventListener('mouseup', onDragEnd);
    }
    function onDragStart(e) {
      window.addEventListener('mousemove', onDragging);
      window.addEventListener('mouseup', onDragEnd);
    }
    function onDraggingTop(e) {
      const { pageY } = e;
      const { x } = previousOffset;
      const y = pageY - originMouseY + previousOffset.y;
      setOffset({ x, y });
    }
    function onDragEndTop(e) {
      previousOffset.y += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onDraggingTop);
      window.removeEventListener('mouseup', onDragEndTop);
    }
    function onDragStartTop(e) {
      window.addEventListener('mousemove', onDraggingTop);
      window.addEventListener('mouseup', onDragEndTop);
    }
    function onDraggingLeft(e) {
      const { pageX } = e;
      const x = pageX - originMouseX + previousOffset.x;
      const { y } = previousOffset;
      setOffset({ x, y });
    }
    function onDragEndLeft(e) {
      previousOffset.x += e.pageX - originMouseX;
      window.removeEventListener('mousemove', onDraggingLeft);
      window.removeEventListener('mouseup', onDragEndLeft);
    }
    function onDragStartLeft(e) {
      window.addEventListener('mousemove', onDraggingLeft);
      window.addEventListener('mouseup', onDragEndLeft);
    }
    function onResizingRight(e) {
      const { pageX } = e;
      const width = pageX - originMouseX + previousSize.width;
      const { height } = previousSize;
      setSize({ width, height });
    }
    function onResizeEndRight(e) {
      previousSize.width += e.pageX - originMouseX;
      window.removeEventListener('mousemove', onResizingRight);
      window.removeEventListener('mouseup', onResizeEndRight);
    }
    function onResizeStartRight(e) {
      window.addEventListener('mousemove', onResizingRight);
      window.addEventListener('mouseup', onResizeEndRight);
    }
    function onResizingBottom(e) {
      const { pageY } = e;
      const { width } = previousSize;
      const height = pageY - originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndBottom(e) {
      previousSize.height += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onResizingBottom);
      window.removeEventListener('mouseup', onResizeEndBottom);
    }
    function onResizeStartBottom(e) {
      window.addEventListener('mousemove', onResizingBottom);
      window.addEventListener('mouseup', onResizeEndBottom);
    }
    function onResizingLeft(e) {
      const { pageX } = e;
      const width = -pageX + originMouseX + previousSize.width;
      const { height } = previousSize;
      setSize({ width, height });
    }
    function onResizeEndLeft(e) {
      previousSize.width += -e.pageX + originMouseX;
      window.removeEventListener('mousemove', onResizingLeft);
      window.removeEventListener('mouseup', onResizeEndLeft);
    }
    function onResizeStartLeft(e) {
      window.addEventListener('mousemove', onResizingLeft);
      window.addEventListener('mouseup', onResizeEndLeft);
    }
    function onResizingTop(e) {
      const { pageY } = e;
      const height = -pageY + originMouseY + previousSize.height;
      const { width } = previousSize;
      setSize({ width, height });
    }
    function onResizeEndTop(e) {
      previousSize.height += -e.pageY + originMouseY;
      window.removeEventListener('mousemove', onResizingTop);
      window.removeEventListener('mouseup', onResizeEndTop);
    }
    function onResizeStartTop(e) {
      window.addEventListener('mousemove', onResizingTop);
      window.addEventListener('mouseup', onResizeEndTop);
    }
    function onResizingTopLeft(e) {
      const { pageX, pageY } = e;
      const width = -pageX + originMouseX + previousSize.width;
      const height = -pageY + originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndTopLeft(e) {
      previousSize.width += -e.pageX + originMouseX;
      previousSize.height += -e.pageY + originMouseY;
      window.removeEventListener('mousemove', onResizingTopLeft);
      window.removeEventListener('mouseup', onResizeEndTopLeft);
    }
    function onResizeStartTopLeft(e) {
      window.addEventListener('mousemove', onResizingTopLeft);
      window.addEventListener('mouseup', onResizeEndTopLeft);
    }
    function onResizingTopRight(e) {
      const { pageX, pageY } = e;
      const width = pageX - originMouseX + previousSize.width;
      const height = -pageY + originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndTopRight(e) {
      previousSize.width += e.pageX - originMouseX;
      previousSize.height += -e.pageY + originMouseY;
      window.removeEventListener('mousemove', onResizingTopRight);
      window.removeEventListener('mouseup', onResizeEndTopRight);
    }
    function onResizeStartTopRight(e) {
      window.addEventListener('mousemove', onResizingTopRight);
      window.addEventListener('mouseup', onResizeEndTopRight);
    }
    function onResizingBottomLeft(e) {
      const { pageX, pageY } = e;
      const width = -pageX + originMouseX + previousSize.width;
      const height = pageY - originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndBottomLeft(e) {
      previousSize.width += -e.pageX + originMouseX;
      previousSize.height += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onResizingBottomLeft);
      window.removeEventListener('mouseup', onResizeEndBottomLeft);
    }
    function onResizeStartBottomLeft(e) {
      window.addEventListener('mousemove', onResizingBottomLeft);
      window.addEventListener('mouseup', onResizeEndBottomLeft);
    }
    function onResizingBottomRight(e) {
      const { pageX, pageY } = e;
      const width = pageX - originMouseX + previousSize.width;
      const height = pageY - originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndBottomRight(e) {
      previousSize.width += e.pageX - originMouseX;
      previousSize.height += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onResizingBottomRight);
      window.removeEventListener('mouseup', onResizeEndBottomRight);
    }
    function onResizeStartBottomRight(e) {
      window.addEventListener('mousemove', onResizingBottomRight);
      window.addEventListener('mouseup', onResizeEndBottomRight);
    }
    function onMouseDown(e) {
      originMouseX = e.pageX;
      originMouseY = e.pageY;
      if (dragTarget && e.target === dragTarget) return onDragStart(e);
      if (e.target !== target || !resizable) return;
      const { offsetX, offsetY } = e;
      const { width, height } = target.getBoundingClientRect();

      if (offsetX < resizeThreshold) {
        if (offsetY < resizeThreshold) {
          onResizeStartTopLeft(e);
          onDragStart(e);
        } else if (height - offsetY < resizeThreshold) {
          onResizeStartBottomLeft(e);
          onDragStartLeft(e);
        } else {
          onResizeStartLeft(e);
          onDragStartLeft(e);
        }
      } else if (offsetY < resizeThreshold) {
        if (width - offsetX < resizeThreshold) {
          onDragStartTop(e);
          onResizeStartTopRight(e);
        } else {
          onResizeStartTop(e);
          onDragStartTop(e);
        }
      } else if (width - offsetX < resizeThreshold) {
        if (height - offsetY < resizeThreshold) onResizeStartBottomRight(e);
        else onResizeStartRight(e);
      } else if (height - offsetY < resizeThreshold) {
        onResizeStartBottom(e);
      }
    }

    target.addEventListener('mousedown', onMouseDown);
    return () => {
      target.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onDraggingLeft);
      window.removeEventListener('mousemove', onDraggingTop);
      window.removeEventListener('mousemove', onDragging);
      window.removeEventListener('mouseup', onDragEndTop);
      window.removeEventListener('mouseup', onDragEndLeft);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('mousemove', onResizingTop);
      window.removeEventListener('mousemove', onResizingRight);
      window.removeEventListener('mousemove', onResizingBottom);
      window.removeEventListener('mousemove', onResizingLeft);
      window.removeEventListener('mousemove', onResizingBottomLeft);
      window.removeEventListener('mousemove', onResizingTopLeft);
      window.removeEventListener('mousemove', onResizingTopRight);
      window.removeEventListener('mousemove', onResizingBottomRight);
      window.removeEventListener('mouseup', onResizeEndTop);
      window.removeEventListener('mouseup', onResizeEndRight);
      window.removeEventListener('mouseup', onResizeEndBottom);
      window.removeEventListener('mouseup', onResizeEndLeft);
      window.removeEventListener('mouseup', onResizeEndBottomLeft);
      window.removeEventListener('mouseup', onResizeEndTopLeft);
      window.removeEventListener('mouseup', onResizeEndTopRight);
      window.removeEventListener('mouseup', onResizeEndBottomRight);
    };
  }, []);
  return { offset, size };
}

function useCursor(ref, threshold = 10, resizable = true) {
  useEffect(() => {
    const target = ref.current;
    if (!target || !resizable) return;
    const cover = document.createElement('div');
    cover.style.position = 'fixed';
    cover.style.top = 0;
    cover.style.left = 0;
    cover.style.right = 0;
    cover.style.bottom = 0;
    cover.style.display = 'none';
    document.body.appendChild(cover);
    let lock = false;
    let position = '';
    function setPosition(p) {
      position = p;
      target.style.cursor = getCursorStyle(position);
    }
    function onMouseDown(e) {
      if (e.target !== target) return;
      onHover(e);
      lock = true;
      cover.style.cursor = getCursorStyle(position);
      cover.style.display = 'block';
      window.addEventListener('mouseup', onMouseUp);
    }
    function onMouseUp(e) {
      lock = false;
      cover.style.display = 'none';
      window.removeEventListener('mouseup', onMouseUp);
    }
    function onHoverEnd(e) {
      if (lock) return;
      setPosition('');
    }
    function onHover(e) {
      if (lock) return;
      if (e.target !== target) return setPosition('');
      const { offsetX, offsetY } = e;
      const { width, height } = target.getBoundingClientRect();
      if (offsetX < threshold) {
        if (offsetY < threshold) {
          setPosition('topLeft');
        } else if (height - offsetY < threshold) {
          setPosition('bottomLeft');
        } else {
          setPosition('left');
        }
      } else if (offsetY < threshold) {
        if (width - offsetX < threshold) {
          setPosition('topRight');
        } else {
          setPosition('top');
        }
      } else if (width - offsetX < threshold) {
        if (height - offsetY < threshold) setPosition('bottomRight');
        else setPosition('right');
      } else if (height - offsetY < threshold) {
        setPosition('bottom');
      } else {
        setPosition('');
      }
    }
    target.addEventListener('mouseleave', onHoverEnd);
    target.addEventListener('mousemove', onHover);
    target.addEventListener('mousedown', onMouseDown);
    return () => {
      cover.remove();
      target.removeEventListener('mouseleave', onHoverEnd);
      target.removeEventListener('mousemove', onHover);
      target.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
}
function getCursorStyle(pos) {
  switch (pos) {
    case 'top':
      return 'n-resize';
    case 'topRight':
      return 'ne-resize';
    case 'right':
      return 'e-resize';
    case 'bottomRight':
      return 'se-resize';
    case 'bottom':
      return 's-resize';
    case 'bottomLeft':
      return 'sw-resize';
    case 'left':
      return 'w-resize';
    case 'topLeft':
      return 'nw-resize';
    default:
      return 'auto';
  }
}
export default useElementResize;
