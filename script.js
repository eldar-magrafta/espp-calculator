// ==================== CONSTANTS ====================

// Translation Data
const translations = {
  en: {
    title: 'ESPP Calculator',
    selectPeriod: 'Select Offering Period',
    periodTooltip: 'Choose your ESPP offering period. Each period is 6 months long.',
    periodOctMar: 'October → March',
    periodAprSep: 'April → September',
    startPriceLabel: 'Stock Price',
    endPriceLabel: 'Stock Price',
    startPriceTooltip: 'Enter the stock price at the beginning of the offering period.',
    endPriceTooltip: 'Enter the stock price at the end of the offering period.',
    todayPriceLabel: 'Today\'s Stock Price (Optional)',
    todayPriceTooltip: 'Enter today\'s stock price to see what your shares would be worth today if you haven\'t sold them yet after the purchase date.',
    todayPricePlaceholder: 'USD $ - Leave empty if not applicable',
    actualSharesToggle: 'I already received the shares',
    actualSharesTooltip: 'Enable this toggle if you already received your shares and know the exact number. When enabled, you\'ll enter the actual shares received, and the calculator will skip the salary and contribution fields. When disabled, the calculator will estimate shares based on your salary and contribution percentage.',
    actualSharesLabel: 'Actual Shares Received',
    actualSharesPlaceholder: 'Enter actual shares received',
    contributionLabel: 'ESPP Contribution %',
    contributionTooltip: 'Select what percentage of your salary (1-20%) you want to contribute to ESPP each month.',
    contributionPlaceholder: 'Select percentage',
    salaryLabel: 'Monthly Base Salary (NIS)',
    salaryTooltip: 'Enter your gross monthly salary in NIS before taxes. This is used to calculate your ESPP contribution amount.',
    salaryPlaceholder: 'NIS ₪',
    exchangeRateLabel: 'NIS to USD Exchange Rate',
    exchangeRateTooltip: 'Enter the current exchange rate from NIS to USD (e.g., 3.60 means 1 USD = 3.60 NIS). Check current rates online.',
    exchangeRatePlaceholder: 'e.g., 3.60',
    calculateButton: 'Calculate',
    resultsHeader: 'Calculation Results',
    monthlyContribution: 'Monthly Contribution (NIS)',
    totalContributionNIS: 'Total ESPP Contributions (6 months) - NIS',
    sharesLabel: 'Number of Shares You\'ll Get',
    chartTitle: 'Visual Breakdown',
    priceComparisonTitle: 'Stock Price Comparison',
    startPriceBar: 'Start Price',
    endPriceBar: 'End Price',
    purchasePriceBar: 'Your Purchase Price (15% off)',
    profitBreakdownTitle: 'Profit Breakdown',
    totalContributionUSD: 'Total Contribution (USD)',
    contributionSegment: 'Your Contribution',
    profitSegment: 'Your Profit',
    valueAtDate: 'Their Value at',
    valueTodayLabel: 'Their Value Today',
    profitAtDate: 'Your Instant Profit at',
    profitValueMinus: '(Value - Contribution)',
    profitTodayLabel: 'Your Total Profit Today (Value Today - Contribution)',
    
    // Results section labels
    lowerStockPrice: 'Lower Stock Price',
    purchasePriceDiscount: 'Purchase Price - 15% Discount',
    totalContributionUSD: 'Total ESPP Contributions (6 months) - USD',
    feesTitle: '💰Important Information About Fees',
    feesPurchase: 'Purchase Fees (Covered by MSI):',
    feesPurchaseText: 'When you buy shares through the ESPP, E*TRADE charges a transaction fee. The good news: Motorola Solutions pays these purchase fees for you!',
    feesSelling: 'Selling Fees (Your Responsibility):',
    feesSellingText: 'When you sell your ESPP shares, E*TRADE will charge a selling fee. You are responsible for paying these fees. Make sure to factor this into your calculations when planning to sell.',
    taxTitle: '💡Understanding Your ESPP and Taxes',
    taxImportant: 'Important: This is "after-tax" money',
    taxImportantText: 'Your ESPP contribution is deducted from your salary after income tax has already been calculated and paid. For example, if your base salary is 25,000 NIS and you contribute 20%, you\'re contributing 5,000 NIS that you\'ve already paid income tax on. This means the ESPP contribution comes from "after-tax" money.',
    taxWhenBuy: 'When you buy the shares',
    taxWhenBuyText: 'No additional tax is owed at that moment. The shares just appear in your E*TRADE account.',
    taxWhenSell: 'When you sell the shares (in the future):',
    taxWhenSellText: 'You\'ll only pay tax on the PROFIT you made (the difference between what you paid and what you sold them for). You won\'t be taxed again on the original contribution (the 5,000 NIS in our example) because you already paid tax on it when it was part of your salary.'
  },
  he: {
    title: 'מחשבון ESPP',
    selectPeriod: 'בחר תקופת הצעה',
    periodTooltip: 'בחר את תקופת ההצעה של ESPP שלך. כל תקופה היא 6 חודשים.',
    periodOctMar: 'אוקטובר ← מרץ',
    periodAprSep: 'אפריל ← ספטמבר',
    startPriceLabel: 'מחיר המניה ב-',
    endPriceLabel: 'מחיר המניה ב-',
    startPriceTooltip: 'הזן את מחיר המניה בתחילת תקופת ההצעה.',
    endPriceTooltip: 'הזן את מחיר המניה בסוף תקופת ההצעה.',
    todayPriceLabel: 'מחיר המניה היום (אופציונלי)',
    todayPriceTooltip: 'הזן את מחיר המניה של היום כדי לראות כמה המניות שלך שוות היום אם עדיין לא מכרת אותן לאחר תאריך הרכישה.',
    todayPricePlaceholder: 'דולר $ - השאר ריק אם לא רלוונטי',
    actualSharesToggle: 'כבר קיבלתי את המניות',
    actualSharesTooltip: 'הפעל אפשרות זו אם כבר קיבלת את המניות ואתה יודע את המספר המדויק. כאשר מופעל, תזין את המניות בפועל שהתקבלו, והמחשבון ידלג על שדות המשכורת וההפרשה. כאשר כבוי, המחשבון יעריך מניות על סמך המשכורת ואחוז ההפרשה שלך.',
    actualSharesLabel: 'מניות בפועל שהתקבלו',
    actualSharesPlaceholder: 'הזן מניות בפועל שהתקבלו',
    contributionLabel: 'אחוז הפרשה ל-ESPP',
    contributionTooltip: 'בחר איזה אחוז מהמשכורת שלך (1-20%) אתה רוצה להפריש ל-ESPP כל חודש.',
    contributionPlaceholder: 'בחר אחוז',
    salaryLabel: 'משכורת בסיס חודשית (ש"ח)',
    salaryTooltip: 'הזן את המשכורת החודשית ברוטו בש"ח לפני מסים. זה משמש לחישוב סכום ההפרשה ל-ESPP שלך.',
    salaryPlaceholder: 'ש"ח ₪',
    exchangeRateLabel: 'שער החליפין ש"ח לדולר',
    exchangeRateTooltip: 'הזן את שער החליפין הנוכחי מש"ח לדולר (למשל, 3.60 פירושו 1 דולר = 3.60 ש"ח). בדוק שערים נוכחיים באינטרנט.',
    exchangeRatePlaceholder: 'למשל, 3.60',
    calculateButton: 'חשב',
    resultsHeader: 'תוצאות החישוב',
    monthlyContribution: 'הפרשה חודשית (ש"ח)',
    totalContributionNIS: 'סה"כ הפרשות ESPP (6 חודשים) - ש"ח',
    sharesLabel: 'מספר המניות שתקבל',
    chartTitle: 'פירוט חזותי',
    priceComparisonTitle: 'השוואת מחירי מניות',
    startPriceBar: 'מחיר התחלה',
    endPriceBar: 'מחיר סיום',
    purchasePriceBar: 'מחיר הרכישה שלך (15% הנחה)',
    profitBreakdownTitle: 'פירוט רווח',
    totalContributionUSD: 'סה"כ הפרשה (דולר)',
    contributionSegment: 'ההפרשה שלך',
    profitSegment: 'הרווח שלך',
    valueAtDate: 'ערכן ב-',
    valueTodayLabel: 'ערכן היום',
    profitAtDate: 'הרווח המיידי שלך ב-',
    profitValueMinus: '(ערך פחות הפרשה)',
    profitTodayLabel: 'הרווח הכולל שלך היום (ערך היום פחות הפרשה)',
    
    // Results section labels
    lowerStockPrice: 'מחיר המניה הנמוך יותר',
    purchasePriceDiscount: 'מחיר רכישה - 15% הנחה',
    totalContributionUSD: 'סה"כ הפרשות ESPP (6 חודשים) - דולר',
    feesTitle: '💰מידע חשוב על עמלות',
    feesPurchase: 'עמלות רכישה (מכוסות על ידי MSI):',
    feesPurchaseText: 'כאשר אתה קונה מניות דרך ESPP, E*TRADE גובה עמלת עסקה. החדשות הטובות: Motorola Solutions משלמת את עמלות הרכישה האלה עבורך!',
    feesSelling: 'עמלות מכירה (באחריותך):',
    feesSellingText: 'כאשר אתה מוכר את מניות ה-ESPP שלך, E*TRADE תגבה עמלת מכירה. אתה אחראי לתשלום העמלות האלה. הקפד לקחת זאת בחשבון בחישובים שלך כאשר אתה מתכנן למכור.',
    taxTitle: '💡הבנת ה-ESPP והמסים שלך',
    taxImportant: 'חשוב: זה כסף "אחרי מס"',
    taxImportantText: 'ההפרשה ל-ESPP שלך מנוכה מהמשכורת שלך לאחר שמס הכנסה כבר חושב ושולם. לדוגמה, אם משכורת הבסיס שלך היא 25,000 ש"ח ואתה מפריש 20%, אתה מפריש 5,000 ש"ח שכבר שילמת עליהם מס הכנסה. זה אומר שההפרשה ל-ESPP באה מכסף "אחרי מס".',
    taxWhenBuy: 'כאשר אתה קונה את המניות',
    taxWhenBuyText: 'אין מס נוסף שחייב באותו רגע. המניות פשוט מופיעות בחשבון E*TRADE שלך.',
    taxWhenSell: 'כאשר אתה מוכר את המניות (בעתיד):',
    taxWhenSellText: 'תשלם מס רק על הרווח שעשית (ההפרש בין מה ששילמת למה שמכרת אותן). לא תמוסה שוב על ההפרשה המקורית (5,000 ש"ח בדוגמה שלנו) כי כבר שילמת עליה מס כשהיא הייתה חלק מהמשכורת שלך.'
  }
};

// Current Language
let currentLang = 'en';

// Calculation Constants
const ESPP_DISCOUNT = 0.15;
const OFFERING_PERIOD_MONTHS = 6;
const MAX_CONTRIBUTION_PERCENT = 20;
const MIN_CONTRIBUTION_PERCENT = 1;

// Color Constants
const COLORS = {
  PROFIT_POSITIVE: '#48bb78',
  PROFIT_NEGATIVE: '#f56565'
};

// CSS Class Names
const CSS_CLASSES = {
  ERROR: 'error',
  ACTIVE: 'active',
  HIDDEN: 'hidden',
  PLACEHOLDER: 'placeholder',
  SELECTED: 'selected',
  OPEN: 'open'
};

// Display Text Constants
const DISPLAY_TEXT = {
  NOT_AVAILABLE: 'N/A',
  SHARES_SUFFIX: ' shares',
  ACTUAL_SUFFIX: ' (actual)',
  CURRENCY_USD: '$',
  CURRENCY_NIS: 'ILS '
};

// Offering Period Configuration
const OFFERING_PERIODS = {
  'oct-mar': {
    startDate: 'October 1',
    endDate: 'March 31'
  },
  'apr-sep': {
    startDate: 'April 1',
    endDate: 'September 30'
  }
};

// ==================== DOM ELEMENTS ====================

let elements = {};

/**
 * Initialize all DOM element references
 * Called after DOM is fully loaded
 */
function initializeElements() {
  elements = {
    // Period Selection Elements
    periodRadios: document.querySelectorAll('input[name="offeringPeriod"]'),
    startDateLabel: document.getElementById('startDateLabel'),
    endDateLabel: document.getElementById('endDateLabel'),
    endDateResult: document.getElementById('endDateResult'),
    endDateProfit: document.getElementById('endDateProfit'),
    endDateTax: document.getElementById('endDateTax'),
    
    // Custom Select Elements
    customSelect: document.getElementById('customSelect'),
    contributionInput: document.getElementById('contribution'),
    selectedValueSpan: document.getElementById('selectedValue'),
    
    // Input Elements
    priceA: document.getElementById('priceA'),
    priceB: document.getElementById('priceB'),
    priceToday: document.getElementById('priceToday'),
    useActualSharesCheckbox: document.getElementById('useActualShares'),
    actualShares: document.getElementById('actualShares'),
    salary: document.getElementById('salary'),
    exchangeRate: document.getElementById('exchangeRate'),
    
    // Container Elements
    actualSharesContainer: document.getElementById('actualSharesContainer'),
    contributionGroup: document.getElementById('contributionGroup'),
    salaryGroup: document.getElementById('salaryGroup'),
    exchangeRateGroup: document.getElementById('exchangeRateGroup'),
    
    // Result Display Elements
    lowerPrice: document.getElementById('lowerPrice'),
    purchasePrice: document.getElementById('purchasePrice'),
    monthlyContribution: document.getElementById('monthlyContribution'),
    totalContributionNIS: document.getElementById('totalContributionNIS'),
    totalContribution: document.getElementById('totalContribution'),
    shares: document.getElementById('shares'),
    marketValue: document.getElementById('marketValue'),
    marketValueToday: document.getElementById('marketValueToday'),
    profit: document.getElementById('profit'),
    profitToday: document.getElementById('profitToday'),
    
    // Result Row Elements
    monthlyContributionRow: document.getElementById('monthlyContributionRow'),
    totalContributionNISRow: document.getElementById('totalContributionNISRow'),
    todayValueRow: document.getElementById('todayValueRow'),
    todayProfitRow: document.getElementById('todayProfitRow')
  };
  
  // Initialize custom select child elements
  elements.selectTrigger = elements.customSelect.querySelector('.custom-select-trigger');
  elements.selectDropdown = elements.customSelect.querySelector('.custom-select-dropdown');
  elements.selectOptions = elements.customSelect.querySelectorAll('.custom-select-option');
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Format a number with thousand separators and 2 decimal places
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
function formatNumber(num) {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format amount as USD currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted USD string
 */
function formatUSD(amount) {
  return DISPLAY_TEXT.CURRENCY_USD + formatNumber(amount);
}

/**
 * Format amount as NIS currency with thousand separators
 * @param {number} amount - Amount to format
 * @returns {string} Formatted NIS string
 */
function formatNIS(amount) {
  return DISPLAY_TEXT.CURRENCY_NIS + formatNumber(amount);
}

/**
 * Calculate and format profit percentage
 * @param {number} profit - Profit amount
 * @param {number} totalContribution - Total contribution amount
 * @returns {string} Formatted percentage string
 */
function formatProfitPercentage(profit, totalContribution) {
  return ((profit / totalContribution) * 100).toFixed(1) + '%';
}

/**
 * Validate numeric input
 * @param {number} value - Value to validate
 * @param {number} min - Minimum acceptable value
 * @returns {boolean} True if valid
 */
function validateNumericInput(value, min = 0) {
  return !isNaN(value) && value > min;
}

/**
 * Clear all error styles from form inputs
 */
function clearErrors() {
  document.querySelectorAll('.' + CSS_CLASSES.ERROR).forEach(el => 
    el.classList.remove(CSS_CLASSES.ERROR)
  );
}

/**
 * Show an element by setting display to flex
 * @param {HTMLElement} element - Element to show
 */
function showElement(element) {
  element.style.display = 'flex';
}

/**
 * Hide an element by setting display to none
 * @param {HTMLElement} element - Element to hide
 */
function hideElement(element) {
  element.style.display = 'none';
}

/**
 * Update all date labels for the selected offering period
 * @param {string} period - Period key ('oct-mar' or 'apr-sep')
 */
function updateDateLabels(period) {
  const config = OFFERING_PERIODS[period];
  elements.startDateLabel.textContent = config.startDate;
  elements.endDateLabel.textContent = config.endDate;
  
  // Also update dates in results/highlight section if they exist
  if (elements.endDateResult) elements.endDateResult.textContent = config.endDate;
  if (elements.endDateProfit) elements.endDateProfit.textContent = config.endDate;
  if (elements.endDateTax) elements.endDateTax.textContent = config.endDate;
}

/**
 * Toggle a collapsible section
 * @param {string} contentId - ID of content element
 * @param {string} arrowId - ID of arrow element
 */
function toggleCollapsible(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);
  content.classList.toggle(CSS_CLASSES.OPEN);
  arrow.classList.toggle(CSS_CLASSES.OPEN);
}

/**
 * Extract all input values from the form
 * @returns {object} Object containing all input values
 */
function getInputValues() {
  return {
    priceA: parseFloat(elements.priceA.value),
    priceB: parseFloat(elements.priceB.value),
    priceToday: parseFloat(elements.priceToday.value),
    contributionPercent: parseFloat(elements.contributionInput.value),
    monthlySalary: parseInt(elements.salary.value),
    exchangeRate: parseFloat(elements.exchangeRate.value),
    useActualShares: elements.useActualSharesCheckbox.checked,
    actualSharesValue: parseFloat(elements.actualShares.value)
  };
}

// ==================== EVENT HANDLERS ====================

/**
 * Handle offering period change
 * @param {Event} event - Change event
 */
function handlePeriodChange(event) {
  updateDateLabels(event.target.value);
  
  // If there are already results displayed, update those too
  const highlightDateSpans = document.querySelectorAll('.highlight span[id^="endDate"]');
  const config = OFFERING_PERIODS[event.target.value];
  highlightDateSpans.forEach(span => {
    if (span) span.textContent = config.endDate;
  });
}

/**
 * Handle custom select trigger click
 * @param {Event} e - Click event
 */
function handleCustomSelectClick(e) {
  e.stopPropagation();
  elements.selectTrigger.classList.toggle(CSS_CLASSES.ACTIVE);
  elements.selectDropdown.classList.toggle(CSS_CLASSES.ACTIVE);
}

/**
 * Handle custom select option click
 * @param {HTMLElement} option - Selected option element
 */
function handleOptionClick(option) {
  const value = option.getAttribute('data-value');
  const text = option.textContent;
  
  elements.contributionInput.value = value;
  elements.selectedValueSpan.textContent = text;
  
  if (value !== '') {
    elements.selectTrigger.classList.remove(CSS_CLASSES.PLACEHOLDER);
  } else {
    elements.selectTrigger.classList.add(CSS_CLASSES.PLACEHOLDER);
  }
  
  elements.selectOptions.forEach(opt => opt.classList.remove(CSS_CLASSES.SELECTED));
  option.classList.add(CSS_CLASSES.SELECTED);
  
  elements.selectTrigger.classList.remove(CSS_CLASSES.ACTIVE, CSS_CLASSES.ERROR);
  elements.selectDropdown.classList.remove(CSS_CLASSES.ACTIVE);
}

/**
 * Handle document click (close dropdown if clicked outside)
 * @param {Event} e - Click event
 */
function handleDocumentClick(e) {
  if (!elements.customSelect.contains(e.target)) {
    elements.selectTrigger.classList.remove(CSS_CLASSES.ACTIVE);
    elements.selectDropdown.classList.remove(CSS_CLASSES.ACTIVE);
  }
}

/**
 * Handle actual shares toggle checkbox
 */
function handleActualSharesToggle() {
  const isChecked = elements.useActualSharesCheckbox.checked;
  
  if (isChecked) {
    elements.actualSharesContainer.style.display = 'block';
    elements.contributionGroup.classList.add(CSS_CLASSES.HIDDEN);
    elements.salaryGroup.classList.add(CSS_CLASSES.HIDDEN);
    elements.exchangeRateGroup.classList.add(CSS_CLASSES.HIDDEN);
  } else {
    elements.actualSharesContainer.style.display = 'none';
    elements.actualShares.value = '';
    elements.actualShares.classList.remove(CSS_CLASSES.ERROR);
    elements.contributionGroup.classList.remove(CSS_CLASSES.HIDDEN);
    elements.salaryGroup.classList.remove(CSS_CLASSES.HIDDEN);
    elements.exchangeRateGroup.classList.remove(CSS_CLASSES.HIDDEN);
  }
}

/**
 * Handle input change - removes error state
 * @param {Event} event - Input event
 */
function handleInputChange(event) {
  event.target.classList.remove(CSS_CLASSES.ERROR);
}

/**
 * Handle Enter key press - triggers calculation
 * @param {Event} event - Keypress event
 */
function handleEnterKey(event) {
  if (event.key === 'Enter') {
    calculate();
  }
}

// ==================== VALIDATION ====================

/**
 * Validate all required inputs based on mode
 * @param {boolean} useActualShares - Whether actual shares mode is enabled
 * @returns {boolean} True if all inputs are valid
 */
function validateInputs(useActualShares) {
  clearErrors();
  let hasError = false;
  
  // Always required fields
  if (!validateNumericInput(parseFloat(elements.priceA.value))) {
    elements.priceA.classList.add(CSS_CLASSES.ERROR);
    hasError = true;
  }
  
  if (!validateNumericInput(parseFloat(elements.priceB.value))) {
    elements.priceB.classList.add(CSS_CLASSES.ERROR);
    hasError = true;
  }
  
  if (useActualShares) {
    // Actual shares mode validation
    if (!validateNumericInput(parseFloat(elements.actualShares.value))) {
      elements.actualShares.classList.add(CSS_CLASSES.ERROR);
      hasError = true;
    }
  } else {
    // Normal mode validation
    const contributionPercent = parseFloat(elements.contributionInput.value);
    if (isNaN(contributionPercent) || contributionPercent < MIN_CONTRIBUTION_PERCENT || contributionPercent > MAX_CONTRIBUTION_PERCENT) {
      elements.selectTrigger.classList.add(CSS_CLASSES.ERROR);
      hasError = true;
    }
    
    if (!validateNumericInput(parseInt(elements.salary.value))) {
      elements.salary.classList.add(CSS_CLASSES.ERROR);
      hasError = true;
    }
    
    if (!validateNumericInput(parseFloat(elements.exchangeRate.value))) {
      elements.exchangeRate.classList.add(CSS_CLASSES.ERROR);
      hasError = true;
    }
  }
  
  return !hasError;
}

// ==================== CALCULATION FUNCTIONS ====================

/**
 * Calculate purchase price based on stock prices
 * @param {number} priceA - Starting period price
 * @param {number} priceB - Ending period price
 * @returns {object} Object with lowerPrice and purchasePrice
 */
function calculatePurchasePrice(priceA, priceB) {
  const lowerPrice = Math.min(priceA, priceB);
  const purchasePrice = lowerPrice * (1 - ESPP_DISCOUNT);
  return { lowerPrice, purchasePrice };
}

/**
 * Calculate number of shares and contributions
 * @param {boolean} useActualShares - Whether using actual shares mode
 * @param {number} actualSharesValue - Actual shares received (if applicable)
 * @param {number} monthlySalary - Monthly salary in NIS
 * @param {number} contributionPercent - Contribution percentage
 * @param {number} exchangeRate - NIS to USD exchange rate
 * @param {number} purchasePrice - Price per share with discount
 * @returns {object} Calculation results
 */
function calculateShares(useActualShares, actualSharesValue, monthlySalary, contributionPercent, exchangeRate, purchasePrice) {
  if (useActualShares) {
    const numberOfShares = actualSharesValue;
    const totalContribution = numberOfShares * purchasePrice;
    
    let monthlyContribution = null;
    let totalContributionNIS = null;
    
    if (validateNumericInput(monthlySalary) && validateNumericInput(exchangeRate)) {
      totalContributionNIS = totalContribution * exchangeRate;
      monthlyContribution = totalContributionNIS / OFFERING_PERIOD_MONTHS;
    }
    
    return { numberOfShares, totalContribution, monthlyContribution, totalContributionNIS };
  } else {
    const monthlyContribution = monthlySalary * (contributionPercent / 100);
    const totalContributionNIS = monthlyContribution * OFFERING_PERIOD_MONTHS;
    const totalContribution = totalContributionNIS / exchangeRate;
    const numberOfShares = totalContribution / purchasePrice;
    
    return { numberOfShares, totalContribution, monthlyContribution, totalContributionNIS };
  }
}

/**
 * Calculate profit and market values
 * @param {number} numberOfShares - Number of shares
 * @param {number} priceB - Ending period stock price
 * @param {number} totalContribution - Total contribution amount
 * @param {number} priceToday - Today's stock price (optional)
 * @returns {object} Profit calculation results
 */
function calculateProfit(numberOfShares, priceB, totalContribution, priceToday) {
  const marketValue = numberOfShares * priceB;
  const profit = marketValue - totalContribution;
  
  let marketValueToday = null;
  let profitToday = null;
  
  if (validateNumericInput(priceToday)) {
    marketValueToday = numberOfShares * priceToday;
    profitToday = marketValueToday - totalContribution;
  }
  
  return { marketValue, profit, marketValueToday, profitToday };
}

// ==================== DISPLAY FUNCTIONS ====================

/**
 * Display profit value with color coding
 * @param {HTMLElement} element - Element to update
 * @param {number} profit - Profit amount
 * @param {number} totalContribution - Total contribution for percentage calculation
 */
function displayProfitValue(element, profit, totalContribution) {
  const percentage = formatProfitPercentage(profit, totalContribution);
  element.textContent = formatUSD(profit) + ' (' + percentage + ')';
  element.style.color = profit >= 0 ? COLORS.PROFIT_POSITIVE : COLORS.PROFIT_NEGATIVE;
}

/**
 * Display price calculation results
 * @param {object} results - Calculation results object
 */
function displayPriceResults(results) {
  elements.lowerPrice.textContent = DISPLAY_TEXT.CURRENCY_USD + results.lowerPrice.toFixed(2);
  elements.purchasePrice.textContent = DISPLAY_TEXT.CURRENCY_USD + results.purchasePrice.toFixed(2);
}

/**
 * Display contribution results
 * @param {object} results - Calculation results object
 */
function displayContributionResults(results) {
  if (results.monthlyContribution !== null) {
    elements.monthlyContribution.textContent = formatNIS(results.monthlyContribution);
  } else {
    elements.monthlyContribution.textContent = DISPLAY_TEXT.NOT_AVAILABLE;
  }
  
  if (results.totalContributionNIS !== null) {
    elements.totalContributionNIS.textContent = formatNIS(results.totalContributionNIS);
  } else {
    elements.totalContributionNIS.textContent = DISPLAY_TEXT.NOT_AVAILABLE;
  }
  
  elements.totalContribution.textContent = formatUSD(results.totalContribution);
}

/**
 * Display share calculation results
 * @param {object} results - Calculation results object
 * @param {boolean} useActualShares - Whether actual shares mode is enabled
 */
function displayShareResults(results, useActualShares) {
  const sharesSuffix = useActualShares ? DISPLAY_TEXT.ACTUAL_SUFFIX : '';
  elements.shares.textContent = results.numberOfShares.toFixed(4)  + sharesSuffix;
  elements.marketValue.textContent = formatUSD(results.marketValue);
}

/**
 * Display profit results
 * @param {object} results - Calculation results object
 */
function displayProfitResults(results) {
  displayProfitValue(elements.profit, results.profit, results.totalContribution);
  
  // Handle today's value if provided
  if (results.marketValueToday !== null) {
    elements.marketValueToday.textContent = formatUSD(results.marketValueToday);
    displayProfitValue(elements.profitToday, results.profitToday, results.totalContribution);
    showElement(elements.todayValueRow);
    showElement(elements.todayProfitRow);
  } else {
    hideElement(elements.todayValueRow);
    hideElement(elements.todayProfitRow);
  }
}

/**
 * Toggle visibility of NIS contribution rows
 * @param {boolean} useActualShares - Whether actual shares mode is enabled
 */
function toggleContributionRows(useActualShares) {
  if (useActualShares) {
    hideElement(elements.monthlyContributionRow);
    hideElement(elements.totalContributionNISRow);
  } else {
    showElement(elements.monthlyContributionRow);
    showElement(elements.totalContributionNISRow);
  }
}

/**
 * Display all calculation results
 * @param {object} results - Complete calculation results
 * @param {boolean} useActualShares - Whether actual shares mode is enabled
 */
function displayResults(results, useActualShares) {
  displayPriceResults(results);
  displayContributionResults(results);
  displayShareResults(results, useActualShares);
  displayProfitResults(results);
  toggleContributionRows(useActualShares);
}

// ==================== MAIN CALCULATION ====================

/**
 * Main calculation function - orchestrates all calculations and display
 */
function calculate() {
  const inputs = getInputValues();
  
  if (!validateInputs(inputs.useActualShares)) {
    return;
  }
  
  const { lowerPrice, purchasePrice } = calculatePurchasePrice(inputs.priceA, inputs.priceB);
  
  const { numberOfShares, totalContribution, monthlyContribution, totalContributionNIS } = 
    calculateShares(
      inputs.useActualShares, 
      inputs.actualSharesValue, 
      inputs.monthlySalary, 
      inputs.contributionPercent, 
      inputs.exchangeRate, 
      purchasePrice
    );
  
  const { marketValue, profit, marketValueToday, profitToday } = 
    calculateProfit(numberOfShares, inputs.priceB, totalContribution, inputs.priceToday);
  
  const results = {
    lowerPrice,
    purchasePrice,
    monthlyContribution,
    totalContributionNIS,
    totalContribution,
    numberOfShares,
    marketValue,
    profit,
    marketValueToday,
    profitToday
  };
  
  displayResults(results, inputs.useActualShares);
}

// ==================== COLLAPSIBLE FUNCTIONS ====================

/**
 * Toggle tax information section
 */
function toggleTaxInfo() {
  toggleCollapsible('taxContent', 'taxArrow');
}

/**
 * Toggle fees information section
 */
function toggleFeesInfo() {
  toggleCollapsible('feesContent', 'feesArrow');
}

// ==================== EVENT LISTENERS ====================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
  // Period selection
  elements.periodRadios.forEach(radio => {
    radio.addEventListener('change', handlePeriodChange);
  });
  
  // Custom select
  elements.selectTrigger.addEventListener('click', handleCustomSelectClick);
  elements.selectOptions.forEach(option => {
    option.addEventListener('click', () => handleOptionClick(option));
  });
  document.addEventListener('click', handleDocumentClick);
  
  // Actual shares toggle
  elements.useActualSharesCheckbox.addEventListener('change', handleActualSharesToggle);
  
  // Input validation and enter key
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', handleEnterKey);
    input.addEventListener('input', handleInputChange);
  });
}

// ==================== INITIALIZATION ====================

/**
 * Translate date text based on language
 * @param {string} dateText - Date text to translate
 * @param {string} lang - Language code
 * @returns {string} Translated date
 */
function translateDate(dateText, lang) {
  if (lang === 'he') {
    // English to Hebrew
    if (dateText.includes('October 1')) return '1 באוקטובר';
    if (dateText.includes('March 31')) return '31 במרץ';
    if (dateText.includes('April 1')) return '1 באפריל';
    if (dateText.includes('September 30')) return '30 בספטמבר';
  } else {
    // Hebrew to English
    if (dateText.includes('1 באוקטובר')) return 'October 1';
    if (dateText.includes('31 במרץ')) return 'March 31';
    if (dateText.includes('1 באפריל')) return 'April 1';
    if (dateText.includes('30 בספטמבר')) return 'September 30';
  }
  return dateText;
}

/**
 * Change language
 * @param {string} lang - Language code ('en' or 'he')
 */
function changeLanguage(lang) {
  currentLang = lang;
  
  // No need to update active button - radio buttons handle this automatically
  
  // Set RTL/LTR direction
  document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
  document.body.style.textAlign = lang === 'he' ? 'right' : 'left';
  
  // Translate all text elements
  const t = translations[lang];
  
  // Main title
  document.querySelector('h1').textContent = t.title;
  
  // Update offering period configuration for date labels
  if (lang === 'he') {
    OFFERING_PERIODS['oct-mar'] = { startDate: '1 באוקטובר', endDate: '31 במרץ' };
    OFFERING_PERIODS['apr-sep'] = { startDate: '1 באפריל', endDate: '30 בספטמבר' };
  } else {
    OFFERING_PERIODS['oct-mar'] = { startDate: 'October 1', endDate: 'March 31' };
    OFFERING_PERIODS['apr-sep'] = { startDate: 'April 1', endDate: 'September 30' };
  }
  
  // Update current period dates
  const selectedPeriod = document.querySelector('input[name="offeringPeriod"]:checked').value;
  updateDateLabels(selectedPeriod);
  
  // Also update the dates in the highlight section
  const endDateInHighlight = elements.endDateResult ? elements.endDateResult.textContent : '';
  const endDateInProfit = elements.endDateProfit ? elements.endDateProfit.textContent : '';
  
  // Update these dates based on current period
  const currentPeriodConfig = OFFERING_PERIODS[selectedPeriod];
  if (elements.endDateResult) elements.endDateResult.textContent = currentPeriodConfig.endDate;
  if (elements.endDateProfit) elements.endDateProfit.textContent = currentPeriodConfig.endDate;
  if (elements.endDateTax) elements.endDateTax.textContent = currentPeriodConfig.endDate;
  
  // Update all labels, placeholders, and tooltips
  const labelElements = [
    document.querySelector('label[for="offeringPeriod"]'),
    document.querySelectorAll('label[for="priceA"]')[0],
    document.querySelectorAll('label[for="priceB"]')[0],
    document.querySelector('label[for="priceToday"]'),
    document.querySelector('label[for="actualShares"]'),
    document.querySelector('label[for="contribution"]'),
    document.querySelector('label[for="salary"]'),
    document.querySelector('label[for="exchangeRate"]')
  ];
  
  const labelKeys = ['selectPeriod', 'startPriceLabel', 'endPriceLabel', 'todayPriceLabel', 
                'actualSharesLabel', 'contributionLabel', 'salaryLabel', 'exchangeRateLabel'];
  
  labelElements.forEach((label, index) => {
    if (label && labelKeys[index]) {
      // Special handling for price labels with dates in Hebrew
      if (lang === 'he' && (labelKeys[index] === 'startPriceLabel' || labelKeys[index] === 'endPriceLabel')) {
        const dateSpan = label.querySelector('span');
        if (dateSpan) {
          const dateText = translateDate(dateSpan.textContent, lang);
          // In Hebrew, show "מחיר המניה ב-[date]"
          label.innerHTML = t[labelKeys[index]] + dateText;
        }
      } else if (lang === 'en' && (labelKeys[index] === 'startPriceLabel' || labelKeys[index] === 'endPriceLabel')) {
        // When switching back to English, restore the span structure
        const currentText = label.textContent;
        // Extract date from current text
        let dateText = '';
        if (currentText.includes('ב-')) {
          dateText = currentText.split('ב-')[1] || '';
          dateText = translateDate(dateText, lang);
        }
        // Restore proper English structure: <span>date</span> Stock Price
        if (dateText) {
          label.innerHTML = '<span id="' + (labelKeys[index] === 'startPriceLabel' ? 'startDateLabel' : 'endDateLabel') + '">' + dateText + '</span> ' + t[labelKeys[index]];
        }
      } else {
        // For labels that have child elements (like spans for dates), update only the text node
        const textNode = Array.from(label.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = ' ' + t[labelKeys[index]];
        } else {
          label.childNodes[0].textContent = t[labelKeys[index]];
        }
      }
    }
  });
  
  document.querySelectorAll('.tooltip-text').forEach((tooltip, index) => {
    const keys = ['periodTooltip', 'startPriceTooltip', 'endPriceTooltip', 'todayPriceTooltip',
                  'actualSharesTooltip', 'contributionTooltip', 'salaryTooltip', 'exchangeRateTooltip'];
    if (keys[index]) tooltip.textContent = t[keys[index]];
  });
  
  document.querySelectorAll('.radio-label').forEach((label, index) => {
    label.textContent = index === 0 ? t.periodOctMar : t.periodAprSep;
  });
  
  elements.selectedValueSpan.textContent = t.contributionPlaceholder;
  
  // Update toggle label - find the text node after the toggle switch
  const toggleLabel = document.querySelector('.toggle-label');
  if (toggleLabel) {
    const textNodes = Array.from(toggleLabel.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
    if (textNodes.length > 0) {
      // Add space before text for proper spacing
      textNodes[textNodes.length - 1].textContent = ' ' + t.actualSharesToggle;
    }
  }
  
  document.querySelector('button[onclick="calculate()"]').textContent = t.calculateButton;
  
  // Results section
  document.querySelector('.results-header').textContent = t.resultsHeader;
  
  // Translate result labels
  const resultLabels = document.querySelectorAll('.result-item .result-label');
  resultLabels.forEach(label => {
    const text = label.textContent;
    if (text.includes('Lower Stock Price') || text.includes('מחיר המניה הנמוך')) {
      label.textContent = t.lowerStockPrice;
    } else if (text.includes('Purchase Price - 15%') || text.includes('מחיר רכישה - 15%')) {
      label.textContent = t.purchasePriceDiscount;
    } else if (text.includes('Total ESPP Contributions (6 months) - USD') || text.includes('סה"כ הפרשות ESPP (6 חודשים) - דולר')) {
      label.textContent = t.totalContributionUSD;
    }
  });
  
  document.querySelector('#monthlyContributionRow .result-label').textContent = t.monthlyContribution;
  document.querySelector('#totalContributionNISRow .result-label').textContent = t.totalContributionNIS;
  
  const sharesLabelElem = Array.from(document.querySelectorAll('.result-label')).find(el => 
    el.textContent.includes('Number of Shares') || el.textContent.includes('מספר המניות')
  );
  if (sharesLabelElem) sharesLabelElem.textContent = t.sharesLabel;
  
  // Charts
  const chartTitle = document.querySelector('.chart-title');
  if (chartTitle) chartTitle.textContent = t.chartTitle;
  
  const chartTitles = document.querySelectorAll('.chart-card-title');
  if (chartTitles[0]) chartTitles[0].textContent = t.priceComparisonTitle;
  if (chartTitles[1]) chartTitles[1].textContent = t.profitBreakdownTitle;
  
  const priceBarLabels = document.querySelectorAll('.price-bar-label');
  if (priceBarLabels[0]) priceBarLabels[0].textContent = t.startPriceBar;
  if (priceBarLabels[1]) priceBarLabels[1].textContent = t.endPriceBar;
  if (priceBarLabels[2]) priceBarLabels[2].textContent = t.purchasePriceBar;
  
  const summaryLabel = document.querySelector('.summary-label');
  if (summaryLabel) summaryLabel.textContent = t.totalContributionUSD;
  
  const segmentLabels = document.querySelectorAll('.segment-label');
  if (segmentLabels[0]) segmentLabels[0].textContent = t.contributionSegment;
  if (segmentLabels[1]) segmentLabels[1].textContent = t.profitSegment;
  
  // Highlight section - find all result items in highlight box
  const highlightItems = document.querySelectorAll('.highlight .result-item');
  
  highlightItems.forEach((item) => {
    const label = item.querySelector('.result-label');
    if (!label) return;
    
    const labelText = label.textContent;
    
    // Check which label this is and translate accordingly
    if (labelText.includes('Value at') || labelText.includes('ערכן ב')) {
      const dateSpan = label.querySelector('span');
      if (dateSpan) {
        const dateText = translateDate(dateSpan.textContent, lang);
        // Add space for English, hyphen for Hebrew
        const separator = lang === 'he' ? '' : ' ';
        label.innerHTML = t.valueAtDate + separator + '<span id="endDateResult">' + dateText + '</span>';
      }
    } else if ((labelText.includes('Value Today') || labelText.includes('ערכן היום')) && !labelText.includes('Profit')) {
      label.textContent = t.valueTodayLabel;
    } else if (labelText.includes('Instant Profit') || labelText.includes('הרווח המיידי')) {
      const dateSpan = label.querySelector('span');
      if (dateSpan) {
        const dateText = translateDate(dateSpan.textContent, lang);
        // Add space for English, hyphen for Hebrew
        const separator = lang === 'he' ? '' : ' ';
        label.innerHTML = t.profitAtDate + separator + '<span id="endDateProfit">' + dateText + '</span> ' + t.profitValueMinus;
      }
    } else if (labelText.includes('Total Profit Today') || labelText.includes('הרווח הכולל')) {
      label.textContent = t.profitTodayLabel;
    }
  });
  
  // Collapsible sections  
  const feesTitleElem = document.querySelector('[onclick="toggleFeesInfo()"] strong');
  if (feesTitleElem) feesTitleElem.textContent = t.feesTitle;
  
  const taxTitleElem = document.querySelector('[onclick="toggleTaxInfo()"] strong');
  if (taxTitleElem) taxTitleElem.textContent = t.taxTitle;
  
  // Update collapsible content
  const feesContent = document.querySelector('#feesContent .collapsible-content-inner');
  if (feesContent) {
    feesContent.innerHTML = `
      <strong style="color: #2c5282">${t.feesPurchase}</strong>
      ${t.feesPurchaseText}<br/><br/>
      <strong style="color: #2c5282">${t.feesSelling}</strong>
      ${t.feesSellingText}
    `;
  }
  
  const taxContent = document.querySelector('#taxContent .collapsible-content-inner');
  if (taxContent) {
    const endDate = elements.endDateTax ? elements.endDateTax.textContent : (lang === 'he' ? '31 במרץ' : 'March 31');
    taxContent.innerHTML = `
      <strong>${t.taxImportant}</strong>
      ${t.taxImportantText}
      <strong>${t.taxWhenBuy} (<span>${endDate}</span>):</strong>
      ${t.taxWhenBuyText}
      <strong>${t.taxWhenSell}</strong>
      ${t.taxWhenSellText}
    `;
  }
}

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initEventListeners();
});
