export default function calculateExpireDate(currentExpireDate, month)
{
  // we will assume that currentExpireDate will be always at the end of the month
  console.log(currentExpireDate.getFullYear())
  console.log(currentExpireDate.getMonth())
  console.log(month)
  return new Date(currentExpireDate.getFullYear(), currentExpireDate.getMonth() + 1 + month, 0);

}