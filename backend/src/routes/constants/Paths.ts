/**
 * Express router paths go here.
 */

import { Immutable } from '@src/other/types';


const Paths = {
  Base: '/api',
  Tasks: {
    Base: '/tasks',
    Get: '/',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
};


// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
