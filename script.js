// ==================== CONSTANTS ====================

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
  elements.endDateResult.textContent = config.endDate;
  elements.endDateProfit.textContent = config.endDate;
  elements.endDateTax.textContent = config.endDate;
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
  elements.shares.textContent = results.numberOfShares.toFixed(4) + DISPLAY_TEXT.SHARES_SUFFIX + sharesSuffix;
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
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initEventListeners();
});
