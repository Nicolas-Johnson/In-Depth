import { createContext } from 'react';

export const DataContext = createContext({
    blogs: [],
    services: [],
    works: [],
    loading:true,
});