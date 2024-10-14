// src/utils/dataLoader.ts
import { parse } from 'papaparse';

export const loadData = async (csvFilePath: string) => {
  return new Promise((resolve, reject) => {
    parse(csvFilePath, {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};
