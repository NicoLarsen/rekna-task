// Language translations for the Recurring Tasks Matrix app

export type Language = 'en' | 'fi';

export interface Translations {
  // Task labels
  tasks: {
    accounting: {
      category: string;
      bankStatements: string;
      purchaseInvoices: string;
      depreciation: string;
      settlementAccount: string;
      inventoryValues: string;
      salesRecording: string;
      deferredTaxes: string;
      accountsReceivable: string;
      vatCalculationCreated: string;
      vatReportSent: string;
      vatPaid: string;
    };
    payroll: {
      category: string;
      hourlyEntries: string;
      payrollAccounting: string;
      salariesApproval: string;
      salariesPaid: string;
      holidayPay: string;
      obligations: string;
      separateReport: string;
      separateReportPayment: string;
      travelExpenses: string;
    };
    financialStatements: {
      category: string;
      depreciationAdjustments: string;
      taxAccrual: string;
      balanceSheetChecked: string;
      advanceTax: string;
      statementReady: string;
      statementSigned: string;
      audited: string;
      taxReturnFiled: string;
      annualGeneralMeeting: string;
      statementRegistered: string;
      dividendReport: string;
      dividendTaxPaid: string;
      annualDividendReport: string;
      dividendRecorded: string;
      fiscalYearUpdated: string;
    };
  };
  // UI labels
  ui: {
    toDo: string;
    doing: string;
    done: string;
    notApplicable: string;
    stop: string;
    createMissingTasks: string;
    allTasksCreated: string;
    totalCompletion: string;
    filterPlaceholder: string;
    completionPercentage: string;
    movedToDonePhase: string;
    changesSaved: string;
    changesDiscarded: string;
    categoryUpdated: string;
    loadingData: string;
    connectingToHailer: string;
    commentPlaceholder: string;
    commentSaved: string;
  };
  // Month names
  months: string[];
}

export const translations: Record<Language, Translations> = {
  en: {
    tasks: {
      accounting: {
        category: 'Accounting',
        bankStatements: 'Accounting for bank statements + reference payments',
        purchaseInvoices: 'Recording of purchase invoices',
        depreciation: 'Depreciation',
        settlementAccount: 'Closing of the settlement account',
        inventoryValues: 'Recording of inventory values',
        salesRecording: 'Recording of sales from another system',
        deferredTaxes: 'Deferred taxes',
        accountsReceivable: 'Checking the accounts receivable ledger',
        vatCalculationCreated: 'VAT calculation created',
        vatReportSent: 'VAT report sent',
        vatPaid: 'VAT paid',
      },
      payroll: {
        category: 'Payroll',
        hourlyEntries: 'Hourly entries',
        payrollAccounting: 'Payroll accounting',
        salariesApproval: 'Salaries sent for approval',
        salariesPaid: 'Salaries paid',
        holidayPay: 'Holiday pay reserve / vacation days',
        obligations: 'Obligations (Netvisor term)',
        separateReport: 'Separate report',
        separateReportPayment: 'Separate report (payment)',
        travelExpenses: 'Travel expenses',
      },
      financialStatements: {
        category: 'Financial Statements',
        depreciationAdjustments: 'Adjustments to depreciation',
        taxAccrual: 'Tax accrual',
        balanceSheetChecked: 'All balance sheet accounts checked',
        advanceTax: 'Advance tax',
        statementReady: 'Financial statement ready',
        statementSigned: 'Financial statement signed',
        audited: 'Audited',
        taxReturnFiled: 'Tax return filed',
        annualGeneralMeeting: 'Annual general meeting',
        statementRegistered: 'Financial statement registered',
        dividendReport: 'Dividend Report',
        dividendTaxPaid: 'Dividend tax paid',
        annualDividendReport: 'Annual dividend report',
        dividendRecorded: 'Dividend recorded',
        fiscalYearUpdated: 'Fiscal year updated in Hailer',
      },
    },
    ui: {
      toDo: 'To Do',
      doing: 'Doing',
      done: 'Done',
      notApplicable: 'N/A',
      stop: 'Stop',
      createMissingTasks: 'Create {count} missing task{plural}',
      allTasksCreated: 'All tasks created',
      totalCompletion: 'Total Completion',
      filterPlaceholder: 'Filter...',
      completionPercentage: '%',
      movedToDonePhase: 'Moved to Done phase.',
      changesSaved: 'Changes saved.',
      changesDiscarded: 'Changes discarded.',
      categoryUpdated: '{category} updated.',
      loadingData: 'Loading data...',
      connectingToHailer: 'Connecting to Hailer...',
      commentPlaceholder: 'Add a comment...',
      commentSaved: 'Comment saved',
    },
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
  },
  fi: {
    tasks: {
      accounting: {
        category: 'Kirjanpito',
        bankStatements: 'Tiliotteiden + viitemaksujen kirjaus',
        purchaseInvoices: 'Ostolaskujen kirjaus',
        depreciation: 'Poistot',
        settlementAccount: 'Selvittelytilin sulkeminen',
        inventoryValues: 'Varastoarvojen kirjaus',
        salesRecording: 'Myynnin kirjaus toisesta järjestelmästä',
        deferredTaxes: 'Laskennalliset verot',
        accountsReceivable: 'Myyntireskontran tarkistus',
        vatCalculationCreated: 'ALV laskelma muodostettu',
        vatReportSent: 'ALV ilmoitus lähetetty',
        vatPaid: 'ALV maksettu',
      },
      payroll: {
        category: 'Palkanlaskenta',
        hourlyEntries: 'Tuntikirjaukset',
        payrollAccounting: 'Palkkojen kirjaus',
        salariesApproval: 'Palkat lähetetty hyväksyttäväksi',
        salariesPaid: 'Palkat maksettu',
        holidayPay: 'Lomapalkkavar. / lomapäivät',
        obligations: 'Velvoitteet (Netvisor-termi)',
        separateReport: 'Erillisraportti',
        separateReportPayment: 'Erillisraportti (maksu)',
        travelExpenses: 'Matkalaskut',
      },
      financialStatements: {
        category: 'Tilinpäätös',
        depreciationAdjustments: 'Poistojen oikaisut',
        taxAccrual: 'Verojaksotus',
        balanceSheetChecked: 'Kaikki tasetilit tarkistettu',
        advanceTax: 'Ennakkovero',
        statementReady: 'Tilinpäätös valmis',
        statementSigned: 'Tilinpäätös allekirjoitettu',
        audited: 'Tilintarkastettu',
        taxReturnFiled: 'Veroilmoitus jätetty',
        annualGeneralMeeting: 'Yhtiökokous',
        statementRegistered: 'Tilinpäätös rekisteröity',
        dividendReport: 'Osinkoraportti',
        dividendTaxPaid: 'Osinkovero maksettu',
        annualDividendReport: 'Vuosi-ilmoitus osingoista',
        dividendRecorded: 'Osinko kirjattu',
        fiscalYearUpdated: 'Tilikausi päivitetty Haileriin',
      },
    },
    ui: {
      toDo: 'Tekemättä',
      doing: 'Työn alla',
      done: 'Valmis',
      notApplicable: 'Ei koske',
      stop: 'Pysäytä',
      createMissingTasks: 'Luo {count} puuttuva tehtävä{plural}',
      allTasksCreated: 'Kaikki tehtävät luotu',
      totalCompletion: 'Kokonaisuus',
      filterPlaceholder: 'Suodata...',
      completionPercentage: '%',
      movedToDonePhase: 'Siirretty Valmis-vaiheeseen.',
      changesSaved: 'Muutokset tallennettu.',
      changesDiscarded: 'Muutokset hylätty.',
      categoryUpdated: '{category} päivitetty.',
      loadingData: 'Ladataan tietoja...',
      connectingToHailer: 'Yhdistetään Haileriin...',
      commentPlaceholder: 'Lisää kommentti...',
      commentSaved: 'Kommentti tallennettu',
    },
    months: [
      'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu',
      'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'
    ],
  },
};

// Helper to get task label by field ID
export function getTaskLabel(fieldId: string, language: Language): string {
  const t = translations[language];

  // Map field IDs to translation keys
  const fieldIdToKey: Record<string, string> = {
    // Accounting
    '698f06c9e51763655d5b9005': t.tasks.accounting.bankStatements,
    '698f06cae51763655d5b900b': t.tasks.accounting.purchaseInvoices,
    '698f06cae51763655d5b9018': t.tasks.accounting.depreciation,
    '698f06cae51763655d5b901d': t.tasks.accounting.settlementAccount,
    '698f06cae51763655d5b9025': t.tasks.accounting.inventoryValues,
    '698f06cae51763655d5b902d': t.tasks.accounting.salesRecording,
    '698f06cae51763655d5b9038': t.tasks.accounting.deferredTaxes,
    '698f06cae51763655d5b9049': t.tasks.accounting.accountsReceivable,
    '699607cd941c1a93e9fe1624': t.tasks.accounting.vatCalculationCreated,
    '699607cd941c1a93e9fe1627': t.tasks.accounting.vatReportSent,
    '699607cd941c1a93e9fe162b': t.tasks.accounting.vatPaid,
    // Payroll
    '698f06cbe51763655d5b9064': t.tasks.payroll.hourlyEntries,
    '698f06cbe51763655d5b9069': t.tasks.payroll.payrollAccounting,
    '698f06cbe51763655d5b9072': t.tasks.payroll.salariesApproval,
    '698f06cbe51763655d5b907a': t.tasks.payroll.salariesPaid,
    '698f06cbe51763655d5b9085': t.tasks.payroll.holidayPay,
    '698f06cbe51763655d5b908a': t.tasks.payroll.obligations,
    '698f06cbe51763655d5b9092': t.tasks.payroll.separateReport,
    '698f06cce51763655d5b909a': t.tasks.payroll.separateReportPayment,
    '698f06cce51763655d5b90a5': t.tasks.payroll.travelExpenses,
    // Financial Statements
    '698f06cce51763655d5b90b2': t.tasks.financialStatements.depreciationAdjustments,
    '698f06cce51763655d5b90ba': t.tasks.financialStatements.taxAccrual,
    '698f06cce51763655d5b90c5': t.tasks.financialStatements.balanceSheetChecked,
    '698f06cce51763655d5b90ce': t.tasks.financialStatements.advanceTax,
    '698f06cde51763655d5b90d6': t.tasks.financialStatements.statementReady,
    '698f06cde51763655d5b90de': t.tasks.financialStatements.statementSigned,
    '698f06cde51763655d5b90f2': t.tasks.financialStatements.audited,
    '698f06cee51763655d5b9111': t.tasks.financialStatements.taxReturnFiled,
    '698f06cee51763655d5b9139': t.tasks.financialStatements.annualGeneralMeeting,
    '698f06cee51763655d5b914d': t.tasks.financialStatements.statementRegistered,
    '698f06cfe51763655d5b9155': t.tasks.financialStatements.dividendReport,
    '698f06cfe51763655d5b915d': t.tasks.financialStatements.dividendTaxPaid,
    '698f06cfe51763655d5b9167': t.tasks.financialStatements.annualDividendReport,
    '698f06cfe51763655d5b9172': t.tasks.financialStatements.dividendRecorded,
    '698f06d0e51763655d5b900b': t.tasks.financialStatements.fiscalYearUpdated,
  };

  return fieldIdToKey[fieldId] || fieldId;
}

// Helper to get category label
export function getCategoryLabel(category: string, language: Language): string {
  const t = translations[language];

  switch (category) {
    case 'Accounting':
      return t.tasks.accounting.category;
    case 'Payroll':
      return t.tasks.payroll.category;
    case 'Financial Statements':
      return t.tasks.financialStatements.category;
    default:
      return category;
  }
}

// Helper to format plural text
export function formatPlural(text: string, count: number, language: Language): string {
  if (language === 'en') {
    return text.replace('{plural}', count === 1 ? '' : 's');
  } else {
    // Finnish plural: add 'ä' for count > 1
    return text.replace('{plural}', count === 1 ? '' : 'ä');
  }
}

// Helper to replace placeholders
export function formatText(text: string, params: Record<string, string | number>): string {
  let result = text;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`{${key}}`, String(value));
  });
  return result;
}
