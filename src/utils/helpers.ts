/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import _forOwn from 'lodash/forOwn';

const Helper = {
  getAuthToken: (): string | null => localStorage.getItem('op_token'),
  storeAuthToken: (token: any): void => localStorage.setItem('op_token', token),
  removeAuthToken: (): void => localStorage.removeItem('op_token'),
  setChangePassword: (): void => localStorage.setItem('change_password', 'change_password'),
  getChangePassword: (): string | null => localStorage.getItem('change_password'),
  removeChangePassword: (): void => localStorage.removeItem('change_password'),
  toastr: (description: string, message: string, type = 'success', duration = 5000): void => {
    if (type === 'success') {
      toast.success(message, { autoClose: duration });
    } else if (type === 'error') {
      toast.error(message, { toastId: description, autoClose: duration });
    }
  },
  getDataStored: (value: string): string | null => localStorage.getItem(value),
  storeData: (key: string, value: string): void => {
    localStorage.setItem(key, value);
  },
  remoteStoreData: (value: string) => localStorage.removeItem(value),
  getDownLoadFileCSV: (
    csvContent: number | boolean | BlobPart,
    csvFileName = 'dataList.csv',
  ): void => {
    const exportedFilename = csvFileName;
    const BOM = '\uFEFF';
    csvContent = BOM + csvContent;
    const blob = new Blob([csvContent], {
      type: `text/csv;charset=utf-8,%EF%BB%BF${encodeURIComponent(csvContent)}`,
    });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', exportedFilename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  formatCurrencyJPYName: (value: number | bigint): string => {
    const currencyJPYName = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      currencyDisplay: 'name',
    });
    return currencyJPYName.format(value);
  },
  getFirstAndLastDayOfWeek: (date: string | number | Date): Record<string, number> => {
    const searchTime = new Date(date);
    // First day is the day of the month - the day of the week
    const firstDay = searchTime.getDate() - searchTime.getDay();
    const lastDay = firstDay + 6;
    return { firstDay, lastDay };
  },
  getFirstAndLastDayOfMonth: (date: Date): Record<string, Date> => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // get first day of the month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // get last day of the search month
    return { firstDay, lastDay };
  },
  getThreeDayBeforeCurrentDay: (
    date: { getFullYear: () => number; getMonth: () => number; getDate: () => number },
    index: number,
  ): Record<string, number> => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // get first day of the month
    const lastDayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    const firstDayOfMonth = firstDay.getDate();
    const datePast = date.getDate() - (3 - index); // get 3 days before current day
    const dateDisplayed =
      datePast < firstDayOfMonth ? lastDayOfPrevMonth.getDate() + datePast : datePast;
    return { datePast, dateDisplayed };
  },
  getThreeDayAfterCurrentDay: (
    date: { getFullYear: () => number; getMonth: () => number; getDate: () => number },
    index: number,
  ): Record<string, number> => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // get last day of the search month
    const lastDayOfMonth = lastDay.getDate();
    const dateFuture = date.getDate() + (1 + index); // get 3 days after current day
    const dateDisplayed = dateFuture > lastDayOfMonth ? dateFuture - lastDayOfMonth : dateFuture;
    return { dateFuture, dateDisplayed };
  },
  getUrl(url: string, apiUrl: string): string {
    return (url.startsWith('http') ? '' : apiUrl) + url;
  },
  objectToQueryString: (obj: Record<string, string>): string => {
    const results: Array<string> = [];
    _forOwn(obj, (value, key) => {
      if (Array.isArray(value)) {
        _forOwn(value, (value) => {
          results.push(`${key}=${value}`);
        });
      } else {
        results.push(`${key}=${value}`);
      }
    });
    return results.join('&');
  },
  getLang: (): string | null => {
    return localStorage.getItem('i18nextLng');
  },
};

export default Helper;
