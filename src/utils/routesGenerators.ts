
import type { Trout, TUserPath } from "../types";




export const routesGenerators = (items: TUserPath[]) => {
     const routes = items.reduce((acc : Trout[], item) => {
      
      if (item.path && item.element) {
        acc.push({
          path: item.path,
          element: item.element,
        });
      }
    
      // Children handle (corrected 'children')
      if (item.children) {
        item.children.forEach((child) => {
          if (child.path && child.element) {
            acc.push({
              path: child.path,
              element: child.element,
            });
          }
        });
      }
    
      return acc;
    }, []);
    return routes; 
    
}