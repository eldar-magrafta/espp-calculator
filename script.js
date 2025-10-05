// Constants
const ESPP_DISCOUNT = 0.15;
const OFFERING_PERIOD_MONTHS = 6;
const MAX_CONTRIBUTION_PERCENT = 20;
const MIN_CONTRIBUTION_PERCENT = 1;

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

// DOM Elements
const elements = {
  periodRadios: document.querySelectorAll('input[name="offeringPeriod"]'),
  startDateLabel: document.getElementById('startDateLabel'),
  endDateLabel: document.getElementById('endDateLabel'),
  endDateResult: document.getElementById('endDateResult'),
  endDateProfit: document.getElementById('endDateProfit'),
  endDateTax: document.getElementById('endDateTax'),
  
  customSelect: document.getElementById('customSelect'),
  selectTrigger: null,
  selectDropdown: null,
  selectOptions: null,
  contributionInput: document.getElementById('contribution'),
  selectedValueSpan: document.getElementById('selectedValue'),
  
  priceA: document.getElementById('priceA'),
  priceB: document.getElementById('priceB'),
  priceToday: document.getElementById('priceToday'),
  useActualSharesCheckbox: document.getElementById('useActualShares'),
  actualShares: document.getElementById('actualShares'),
  salary: document.getElementById('salary'),
  exchangeRate: document.getElementById('exchangeRate'),
  
  actualSharesContainer: document.getElementById('actualSharesContainer'),
  contributionGroup: document.getElementById('contributionGroup'),
  salaryGroup: document.getElementById('salaryGroup'),
  exchangeRateGroup: document.getElementById('exchangeRateGroup'),
  
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
  
  monthlyContributionRow: document.getElementById('monthlyContributionRow'),
  totalContributionNISRow: document.getElementById('totalContributionNISRow'),
  todayValueRow: document.getElementById('todayValueRow'),
  todayProfitRow: document.getElementById('todayProfitRow')
};

// Initialize custom select elements
elements.selectTrigger = elements.customSelect.querySelector('.custom-select-trigger');
elements.selectDropdown = elements.customSelect.querySelector('.custom-select-dropdown');
elements.selectOptions = elements.customSelect.querySelectorAll('.custom-select-option');

// Utility Functions
function formatNumber(num) {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function validateNumericInput(value, min = 0) {
  return !isNaN(value) && value > min;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

function showElement(element) {
  element.style.display = 'flex';
}

function hideElement(element) {
  element.style.display = 'none';
}

function updateDateLabels(period) {
  const config = OFFERING_PERIODS[period];
  elements.startDateLabel.textContent = config.startDate;
  elements.endDateLabel.textContent = config.endDate;
  elements.endDateResult.textContent = config.endDate;
  elements.endDateProfit.textContent = config.endDate;
  elements.endDateTax.textContent = config.endDate;
}

// Event Handlers
function handlePeriodChange(event) {
  updateDateLabels(event.target.value);
}

function handleCustomSelectClick(e) {
  e.stopPropagation();
  elements.selectTrigger.classList.toggle('active');
  elements.selectDropdown.classList.toggle('active');
}

function handleOptionClick(option) {
  const value = option.getAttribute('data-value');
  const text = option.textContent;
  
  elements.contributionInput.value = value;
  elements.selectedValueSpan.textContent = text;
  
  if (value !== '') {
    elements.selectTrigger.classList.remove('placeholder');
  } else {
    elements.selectTrigger.classList.add('placeholder');
  }
  
  elements.selectOptions.forEach(opt => opt.classList.remove('selected'));
  option.classList.add('selected');
  
  elements.selectTrigger.classList.remove('active', 'error');
  elements.selectDropdown.classList.remove('active');
}

function handleDocumentClick(e) {
  if (!elements.customSelect.contains(e.target)) {
    elements.selectTrigger.classList.remove('active');
    elements.selectDropdown.classList.remove('active');
  }
}

function handleActualSharesToggle() {
  const isChecked = elements.useActualSharesCheckbox.checked;
  
  if (isChecked) {
    elements.actualSharesContainer.style.display = 'block';
    elements.contributionGroup.classList.add('hidden');
    elements.salaryGroup.classList.add('hidden');
    elements.exchangeRateGroup.classList.add('hidden');
  } else {
    elements.actualSharesContainer.style.display = 'none';
    elements.actualShares.value = '';
    elements.actualShares.classList.remove('error');
    elements.contributionGroup.classList.remove('hidden');
    elements.salaryGroup.classList.remove('hidden');
    elements.exchangeRateGroup.classList.remove('hidden');
  }
}

function handleInputChange(event) {
  event.target.classList.remove('error');
}

function handleEnterKey(event) {
  if (event.key === 'Enter') {
    calculate();
  }
}

// Validation
function validateInputs(useActualShares) {
  clearErrors();
  let hasError = false;
  
  // Always required fields
  if (!validateNumericInput(parseFloat(elements.priceA.value))) {
    elements.priceA.classList.add('error');
    hasError = true;
  }
  
  if (!validateNumericInput(parseFloat(elements.priceB.value))) {
    elements.priceB.classList.add('error');
    hasError = true;
  }
  
  if (useActualShares) {
    // Actual shares mode validation
    if (!validateNumericInput(parseFloat(elements.actualShares.value))) {
      elements.actualShares.classList.add('error');
      hasError = true;
    }
  } else {
    // Normal mode validation
    const contributionPercent = parseFloat(elements.contributionInput.value);
    if (isNaN(contributionPercent) || contributionPercent < MIN_CONTRIBUTION_PERCENT || contributionPercent > MAX_CONTRIBUTION_PERCENT) {
      elements.selectTrigger.classList.add('error');
      hasError = true;
    }
    
    if (!validateNumericInput(parseInt(elements.salary.value))) {
      elements.salary.classList.add('error');
      hasError = true;
    }
    
    if (!validateNumericInput(parseFloat(elements.exchangeRate.value))) {
      elements.exchangeRate.classList.add('error');
      hasError = true;
    }
  }
  
  return !hasError;
}

// Calculation Functions
function calculatePurchasePrice(priceA, priceB) {
  const lowerPrice = Math.min(priceA, priceB);
  const purchasePrice = lowerPrice * (1 - ESPP_DISCOUNT);
  return { lowerPrice, purchasePrice };
}

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

// Display Functions
function displayResults(results, useActualShares) {
  elements.lowerPrice.textContent = '$' + results.lowerPrice.toFixed(2);
  elements.purchasePrice.textContent = '$' + results.purchasePrice.toFixed(2);
  
  if (results.monthlyContribution !== null) {
    elements.monthlyContribution.textContent = 'ILS ' + results.monthlyContribution.toFixed(2);
  } else {
    elements.monthlyContribution.textContent = 'N/A';
  }
  
  if (results.totalContributionNIS !== null) {
    elements.totalContributionNIS.textContent = 'ILS ' + results.totalContributionNIS.toFixed(2);
  } else {
    elements.totalContributionNIS.textContent = 'N/A';
  }
  
  elements.totalContribution.textContent = '$' + results.totalContribution.toFixed(2);
  elements.shares.textContent = results.numberOfShares.toFixed(4) + ' shares' + (useActualShares ? ' (actual)' : '');
  elements.marketValue.textContent = '$' + formatNumber(results.marketValue);
  
  elements.profit.textContent = '$' + formatNumber(results.profit) + ' (' + ((results.profit / results.totalContribution) * 100).toFixed(1) + '%)';
  elements.profit.style.color = results.profit >= 0 ? '#48bb78' : '#f56565';
  
  // Handle today's value if provided
  if (results.marketValueToday !== null) {
    elements.marketValueToday.textContent = '$' + formatNumber(results.marketValueToday);
    elements.profitToday.textContent = '$' + formatNumber(results.profitToday) + ' (' + ((results.profitToday / results.totalContribution) * 100).toFixed(1) + '%)';
    elements.profitToday.style.color = results.profitToday >= 0 ? '#48bb78' : '#f56565';
    showElement(elements.todayValueRow);
    showElement(elements.todayProfitRow);
  } else {
    hideElement(elements.todayValueRow);
    hideElement(elements.todayProfitRow);
  }
  
  // Hide/show NIS contribution fields based on toggle
  if (useActualShares) {
    hideElement(elements.monthlyContributionRow);
    hideElement(elements.totalContributionNISRow);
  } else {
    showElement(elements.monthlyContributionRow);
    showElement(elements.totalContributionNISRow);
  }
}

// Main Calculate Function
function calculate() {
  const priceA = parseFloat(elements.priceA.value);
  const priceB = parseFloat(elements.priceB.value);
  const priceToday = parseFloat(elements.priceToday.value);
  const contributionPercent = parseFloat(elements.contributionInput.value);
  const monthlySalary = parseInt(elements.salary.value);
  const exchangeRate = parseFloat(elements.exchangeRate.value);
  const useActualShares = elements.useActualSharesCheckbox.checked;
  const actualSharesValue = parseFloat(elements.actualShares.value);
  
  if (!validateInputs(useActualShares)) {
    return;
  }
  
  const { lowerPrice, purchasePrice } = calculatePurchasePrice(priceA, priceB);
  
  const { numberOfShares, totalContribution, monthlyContribution, totalContributionNIS } = 
    calculateShares(useActualShares, actualSharesValue, monthlySalary, contributionPercent, exchangeRate, purchasePrice);
  
  const { marketValue, profit, marketValueToday, profitToday } = 
    calculateProfit(numberOfShares, priceB, totalContribution, priceToday);
  
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
  
  displayResults(results, useActualShares);
}

// Collapsible Functions
function toggleTaxInfo() {
  const content = document.getElementById('taxContent');
  const arrow = document.getElementById('taxArrow');
  content.classList.toggle('open');
  arrow.classList.toggle('open');
}

function toggleFeesInfo() {
  const content = document.getElementById('feesContent');
  const arrow = document.getElementById('feesArrow');
  content.classList.toggle('open');
  arrow.classList.toggle('open');
}

// Event Listeners
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEventListeners);
