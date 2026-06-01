function updateAccounts(accounts, logons) {
  const map = new Map();
​
  for (const acc of accounts.Accounts) {
    map.set(acc.Id, { ...acc });
  }
​
  const sortedLogons = [...logons.Logons].sort((a, b) => a.Date - b.Date);
​
  for (const logon of sortedLogons) {
    const acc = map.get(logon.Id);
​
    if (!acc) {
      map.set(logon.Id, {
        Id: logon.Id,
        Name: logon.Name,
        LogonCount: 1,
        LastLogon: logon.Date
      });
      continue;
    }
​
    acc.LogonCount++;
​
    if (acc.LastLogon < logon.Date) {
      acc.LastLogon = logon.Date;
​
      if (logon.Name !== "") {
        acc.Name = logon.Name;
      }
    }
  }
​
  return {
    Accounts: [...map.values()].sort((a, b) => a.Id - b.Id)
  };
}