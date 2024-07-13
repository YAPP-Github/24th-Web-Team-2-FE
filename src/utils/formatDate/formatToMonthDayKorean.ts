/**
 * @param date Date Object
 * @returns MM월 DD일
 */
export const formatToMonthDayKorean = (date: Date) => {
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  return `${month}월 ${day}일`;
};
