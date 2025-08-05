import React, { useEffect, useState } from 'react';

const Utility = () => {
  const [activeTab, setActiveTab] = useState('converter');

  // Unit converter states (metric only)
  const [unitValue, setUnitValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meter');
  const [unitResult, setUnitResult] = useState({});

  // Wind resource calculation states
  const [windSpeed, setWindSpeed] = useState('');
  const [airDensity, setAirDensity] = useState('1.225');
  const [turbineRadius, setTurbineRadius] = useState('');
  const [windPower, setWindPower] = useState('');
  const [windEnergyDensity, setWindEnergyDensity] = useState('');

  // Solar resource calculation states
  const [solarIrradiance, setSolarIrradiance] = useState('');
  const [panelArea, setPanelArea] = useState('');
  const [panelEfficiency, setPanelEfficiency] = useState('20');
  const [solarPower, setSolarPower] = useState('');
  const [dailyEnergy, setDailyEnergy] = useState('');
  const [sunHours, setSunHours] = useState('5');

  // Soil testing states
  const [soilType, setSoilType] = useState('clay');
  const [moistureContent, setMoistureContent] = useState('');
  const [dryDensity, setDryDensity] = useState('');
  const [bearingCapacity, setBearingCapacity] = useState('');
  const [cohesion, setCohesion] = useState('');
  const [frictionAngle, setFrictionAngle] = useState('');

  // Water testing states (IS 456:2000 & IS 3025 compliant)
  const [waterPH, setWaterPH] = useState('');
  const [tds, setTds] = useState('');
  const [turbidity, setTurbidity] = useState('');
  const [chloride, setChloride] = useState('');
  const [sulphate, setSulphate] = useState('');
  const [totalHardness, setTotalHardness] = useState('');
  const [alkalinity, setAlkalinity] = useState('');
  const [organicMatter, setOrganicMatter] = useState('');
  const [waterQuality, setWaterQuality] = useState('');
  const [detailedResults, setDetailedResults] = useState({});
  const [showPrintView, setShowPrintView] = useState(false);

  // Density calculator states
  const [densityMaterial, setDensityMaterial] = useState('water');
  const [densityValue, setDensityValue] = useState('1000'); // kg/m3
  const [weightValue, setWeightValue] = useState('');
  const [weightUnit, setWeightUnit] = useState('ton');
  const [volumeResult, setVolumeResult] = useState('');

  useEffect(() => {
    document.title = 'Engineering Tools - VR Eco Energy | Renewable Energy & Geotechnical Tools';
    
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Unit converter function (show all results in same category)
  const convertUnits = () => {
    if (!unitValue) return;
    
    // Base conversion values to meters/square meters/kilograms/liters/pascals
    const baseConversions = {
      // Area units (to square meters)
      'square-meter': 1,
      'square-kilometer': 1000000,
      'square-centimeter': 0.0001,
      'hectare': 10000,
      'acre': 4046.86,
      'vigha': 1629.88,
      
      // Length units (to meters)
      'meter': 1,
      'kilometer': 1000,
      'centimeter': 0.01,
      'millimeter': 0.001,
      'foot': 0.3048,
      
      // Weight units (to kilograms)
      'kilogram': 1,
      'gram': 0.001,
      'tonne': 1000,
      
      // Volume units (to liters)
      'liter': 1,
      'milliliter': 0.001,
      'cubic-meter': 1000,
      
      // Pressure units (to pascals)
      'pascal': 1,
      'kilopascal': 1000,
      'bar': 100000,
      'kg-per-cm2': 98066.5
    };

    const unitCategories = {
      'area': ['square-meter', 'hectare', 'acre', 'vigha', 'square-kilometer', 'square-centimeter'],
      'length': ['meter', 'kilometer', 'centimeter', 'millimeter', 'foot'],
      'weight': ['kilogram', 'gram', 'tonne'],
      'volume': ['liter', 'milliliter', 'cubic-meter'],
      'pressure': ['pascal', 'kilopascal', 'bar', 'kg-per-cm2']
    };

    const getUnitCategory = (unit) => {
      for (const [category, units] of Object.entries(unitCategories)) {
        if (units.includes(unit)) return category;
      }
      return null;
    };

    const fromCategory = getUnitCategory(fromUnit);

    if (fromCategory && baseConversions[fromUnit]) {
      // Convert to base unit first
      const baseValue = parseFloat(unitValue) * baseConversions[fromUnit];
      
      // Generate all conversions for this category
      const results = {};
      unitCategories[fromCategory].forEach(unit => {
        if (unit !== fromUnit) {
          const convertedValue = baseValue / baseConversions[unit];
          results[unit] = convertedValue.toFixed(6);
        }
      });
      
      setUnitResult(results);
    } else {
      setUnitResult({});
    }
  };

  // Wind resource calculations
  const calculateWindPower = () => {
    if (!windSpeed || !turbineRadius) return;
    
    const area = Math.PI * Math.pow(parseFloat(turbineRadius), 2);
    const power = 0.5 * parseFloat(airDensity) * area * Math.pow(parseFloat(windSpeed), 3);
    const energyDensity = 0.5 * parseFloat(airDensity) * Math.pow(parseFloat(windSpeed), 3);
    
    setWindPower((power / 1000).toFixed(2)); // kW
    setWindEnergyDensity(energyDensity.toFixed(2)); // W/m²
  };

  // Solar resource calculations
  const calculateSolarPower = () => {
    if (!solarIrradiance || !panelArea) return;
    
    const power = (parseFloat(solarIrradiance) * parseFloat(panelArea) * parseFloat(panelEfficiency)) / 100;
    const daily = power * parseFloat(sunHours);
    
    setSolarPower(power.toFixed(2)); // W
    setDailyEnergy((daily / 1000).toFixed(2)); // kWh
  };

  // Soil bearing capacity calculation
  const calculateBearingCapacity = () => {
    if (!cohesion || !frictionAngle || !dryDensity) return;
    
    const phi = parseFloat(frictionAngle) * (Math.PI / 180); // Convert to radians
    const c = parseFloat(cohesion);
    const gamma = parseFloat(dryDensity);
    
    // Simplified Terzaghi bearing capacity formula for shallow foundations
    const Nq = Math.exp(Math.PI * Math.tan(phi)) * Math.pow(Math.tan(Math.PI/4 + phi/2), 2);
    const Nc = (Nq - 1) / Math.tan(phi);
    const Ng = 2 * (Nq - 1) * Math.tan(phi);
    
    // Assuming B = 1m width, D = 1m depth for reference
    const qult = c * Nc + gamma * 1 * Nq + 0.5 * gamma * 1 * Ng;
    const qsafe = qult / 3; // Factor of safety = 3
    
    setBearingCapacity(qsafe.toFixed(2));
  };

  // Water quality assessment as per IS 456:2000 & IS 3025
  const assessWaterQuality = () => {
    if (!waterPH || !tds || !turbidity || !chloride || !sulphate) return;
    
    const ph = parseFloat(waterPH);
    const tdsValue = parseFloat(tds);
    const turbidityValue = parseFloat(turbidity);
    const chlorideValue = parseFloat(chloride);
    const sulphateValue = parseFloat(sulphate);
    const hardnessValue = parseFloat(totalHardness) || 0;
    const alkalinityValue = parseFloat(alkalinity) || 0;
    const organicValue = parseFloat(organicMatter) || 0;
    
    let overall = 'SUITABLE';
    let issues = [];
    let compliance = {};
    
    // IS 456:2000 Standards for concrete mixing water
    const standards = {
      ph: { min: 6.0, max: 8.5, unit: '' },
      tds: { max: 2000, unit: 'mg/L' },
      turbidity: { max: 10, unit: 'NTU' },
      chloride: { max: 1000, unit: 'mg/L' },
      sulphate: { max: 400, unit: 'mg/L' },
      totalHardness: { max: 600, unit: 'mg/L as CaCO3' },
      alkalinity: { max: 200, unit: 'mg/L as CaCO3' },
      organicMatter: { max: 200, unit: 'mg/L' }
    };
    
    // Check pH
    if (ph < standards.ph.min || ph > standards.ph.max) {
      overall = 'NOT SUITABLE';
      issues.push(`pH: ${ph} (should be 6.0-8.5)`);
      compliance.ph = 'FAIL';
    } else {
      compliance.ph = 'PASS';
    }
    
    // Check TDS
    if (tdsValue > standards.tds.max) {
      overall = 'NOT SUITABLE';
      issues.push(`TDS: ${tdsValue} mg/L (max 2000 mg/L)`);
      compliance.tds = 'FAIL';
    } else {
      compliance.tds = 'PASS';
    }
    
    // Check Turbidity
    if (turbidityValue > standards.turbidity.max) {
      overall = overall === 'SUITABLE' ? 'CAUTION' : 'NOT SUITABLE';
      issues.push(`Turbidity: ${turbidityValue} NTU (max 10 NTU)`);
      compliance.turbidity = 'FAIL';
    } else {
      compliance.turbidity = 'PASS';
    }
    
    // Check Chloride
    if (chlorideValue > standards.chloride.max) {
      overall = 'NOT SUITABLE';
      issues.push(`Chloride: ${chlorideValue} mg/L (max 1000 mg/L)`);
      compliance.chloride = 'FAIL';
    } else {
      compliance.chloride = 'PASS';
    }
    
    // Check Sulphate
    if (sulphateValue > standards.sulphate.max) {
      overall = 'NOT SUITABLE';
      issues.push(`Sulphate: ${sulphateValue} mg/L (max 400 mg/L)`);
      compliance.sulphate = 'FAIL';
    } else {
      compliance.sulphate = 'PASS';
    }
    
    // Check optional parameters
    if (hardnessValue > standards.totalHardness.max) {
      overall = overall === 'SUITABLE' ? 'CAUTION' : overall;
      issues.push(`Total Hardness: ${hardnessValue} mg/L (max 600 mg/L)`);
      compliance.totalHardness = 'FAIL';
    } else if (hardnessValue > 0) {
      compliance.totalHardness = 'PASS';
    }
    
    if (alkalinityValue > standards.alkalinity.max) {
      overall = overall === 'SUITABLE' ? 'CAUTION' : overall;
      issues.push(`Alkalinity: ${alkalinityValue} mg/L (max 200 mg/L)`);
      compliance.alkalinity = 'FAIL';
    } else if (alkalinityValue > 0) {
      compliance.alkalinity = 'PASS';
    }
    
    if (organicValue > standards.organicMatter.max) {
      overall = overall === 'SUITABLE' ? 'CAUTION' : overall;
      issues.push(`Organic Matter: ${organicValue} mg/L (max 200 mg/L)`);
      compliance.organicMatter = 'FAIL';
    } else if (organicValue > 0) {
      compliance.organicMatter = 'PASS';
    }
    
    const results = {
      overall,
      issues,
      compliance,
      standards,
      testResults: {
        ph,
        tds: tdsValue,
        turbidity: turbidityValue,
        chloride: chlorideValue,
        sulphate: sulphateValue,
        totalHardness: hardnessValue,
        alkalinity: alkalinityValue,
        organicMatter: organicValue
      },
      testDate: new Date().toLocaleDateString('en-IN'),
      testTime: new Date().toLocaleTimeString('en-IN')
    };
    
    setDetailedResults(results);
    setWaterQuality(`${overall}${issues.length > 0 ? ' - Issues: ' + issues.join(', ') : ''}`);
  };

  // Density calculator function
  const calculateVolume = () => {
    if (!weightValue || !densityValue) return;
    
    const weight = parseFloat(weightValue);
    const density = parseFloat(densityValue);
    
    // Convert weight to kg if needed
    let weightInKg = weight;
    if (weightUnit === 'ton') {
      weightInKg = weight * 1000; // tons to kg
    }
    
    // Calculate volume in cubic meters (m³)
    const volume = weightInKg / density;
    setVolumeResult(volume.toFixed(6));
  };

  // Default densities for materials (kg/m³)
  const materialDensities = {
    water: 1000,
    soil: 1600,
    murrum: 1800,
    'hard-rock': 2700,
    other: 1000
  };

  // Update density when material changes
  const handleMaterialChange = (material) => {
    setDensityMaterial(material);
    setDensityValue(materialDensities[material].toString());
  };

  const tabs = [
    { id: 'converter', name: 'Unit Converter', icon: '📏' },
    { id: 'density', name: 'Density Calculator', icon: '⚖️' },
    { id: 'wind', name: 'Wind Resources', icon: '💨' },
    { id: 'solar', name: 'Solar Resources', icon: '☀️' },
    { id: 'soil', name: 'Soil Testing', icon: '🏗️' },
    { id: 'water', name: 'Water Testing', icon: '💧' },
    { id: 'windmap', name: 'Wind Data Map', icon: '🗺️' }
  ];

  const getUnitsByCategory = () => {
    return {
      'Area': ['square-meter', 'hectare', 'acre', 'vigha', 'square-kilometer', 'square-centimeter'],
      'Length': ['meter', 'kilometer', 'centimeter', 'millimeter', 'foot'],
      'Weight': ['kilogram', 'gram', 'tonne'],
      'Volume': ['liter', 'milliliter', 'cubic-meter'],
      'Pressure': ['pascal', 'kilopascal', 'bar', 'kg-per-cm2']
    };
  };

  const formatUnitName = (unit) => {
    const names = {
      'meter': 'Meter (m)',
      'kilometer': 'Kilometer (km)',
      'centimeter': 'Centimeter (cm)',
      'millimeter': 'Millimeter (mm)',
      'foot': 'Foot (ft)',
      'kilogram': 'Kilogram (kg)',
      'gram': 'Gram (g)',
      'tonne': 'Tonne (t)',
      'liter': 'Liter (L)',
      'milliliter': 'Milliliter (mL)',
      'cubic-meter': 'Cubic Meter (m³)',
      'square-meter': 'Square Meter (m²)',
      'square-kilometer': 'Square Kilometer (km²)',
      'square-centimeter': 'Square Centimeter (cm²)',
      'hectare': 'Hectare (ha)',
      'acre': 'Acre (ac)',
      'vigha': 'Vigha (Gujarat)',
      'pascal': 'Pascal (Pa)',
      'kilopascal': 'Kilopascal (kPa)',
      'bar': 'Bar',
      'kg-per-cm2': 'kg/cm²'
    };
    return names[unit] || unit;
  };

  const unitsByCategory = getUnitsByCategory();

  return (
    <div className="utility-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Engineering Tools</h1>
          <p>Professional tools for renewable energy and geotechnical engineering</p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="content-section">
        <div className="container">
          <div className="utility-container fade-in">
            {/* Tab Navigation */}
            <div className="utility-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`utility-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-name">{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Tool Content */}
            <div className="utility-content">
              {/* Unit Converter (Metric Only) */}
              {activeTab === 'converter' && (
                <div className="tool-panel">
                  <h3>📏 Metric Unit Converter</h3>
                  <div className="converter-enhanced">
                    <div className="converter-section">
                      <h4>From</h4>
                      <div className="converter-input">
                        <input
                          type="number"
                          value={unitValue}
                          onChange={(e) => {
                            setUnitValue(e.target.value);
                            if (e.target.value) {
                              setTimeout(() => convertUnits(), 100);
                            }
                          }}
                          placeholder="Enter value"
                          className="value-input"
                        />
                        <select 
                          value={fromUnit} 
                          onChange={(e) => {
                            setFromUnit(e.target.value);
                            if (unitValue) {
                              setTimeout(() => convertUnits(), 100);
                            }
                          }}
                          className="unit-select"
                        >
                          {Object.entries(unitsByCategory).map(([category, units]) => (
                            <optgroup key={category} label={category}>
                              {units.map(unit => (
                                <option key={unit} value={unit}>
                                  {formatUnitName(unit)}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="converter-arrow">
                      <div className="arrow-icon">⇄</div>
                      <button 
                        className="calc-btn" 
                        onClick={convertUnits}
                      >
                        🔄 Convert Units
                      </button>
                    </div>

                    <div className="converter-section">
                      <h4>Results</h4>
                      <div className="converter-results">
                        {Object.keys(unitResult).length > 0 ? (
                          <div className="results-grid">
                            {Object.entries(unitResult).map(([unit, value]) => (
                              <div key={unit} className="result-item">
                                <span className="result-unit">{formatUnitName(unit)}:</span>
                                <span className="result-value">{value}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="no-results">
                            Enter a value and select a unit to see conversions
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Density Calculator */}
              {activeTab === 'density' && (
                <div className="tool-panel">
                  <h3>⚖️ Density Calculator</h3>
                  <p>Calculate volume from weight and density (Weight/Density = Volume)</p>
                  <div className="calculator-grid">
                    <div className="calc-section">
                      <h4>Material & Density</h4>
                      <div className="input-group">
                        <label>Material Type:</label>
                        <select 
                          value={densityMaterial} 
                          onChange={(e) => handleMaterialChange(e.target.value)}
                        >
                          <option value="water">Water</option>
                          <option value="soil">Soil</option>
                          <option value="murrum">Murrum</option>
                          <option value="hard-rock">Hard Rock</option>
                          <option value="other">Other Material</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Density (kg/m³):</label>
                        <input
                          type="number"
                          value={densityValue}
                          onChange={(e) => setDensityValue(e.target.value)}
                          placeholder="Enter density"
                        />
                      </div>
                      
                      <h4>Weight Input</h4>
                      <div className="input-group">
                        <label>Weight:</label>
                        <div className="input-with-unit">
                          <input
                            type="number"
                            value={weightValue}
                            onChange={(e) => setWeightValue(e.target.value)}
                            placeholder="Enter weight"
                          />
                          <select 
                            value={weightUnit} 
                            onChange={(e) => setWeightUnit(e.target.value)}
                          >
                            <option value="kg">Kilograms (kg)</option>
                            <option value="ton">Tons (t)</option>
                          </select>
                        </div>
                      </div>
                      
                      <button className="calc-btn" onClick={calculateVolume}>
                        Calculate Volume
                      </button>
                    </div>
                    
                    <div className="results-section">
                      <h4>Volume Result</h4>
                      <div className="result-item">
                        <label>Volume in Cubic Meters (m³):</label>
                        <span className="volume-result">{volumeResult || '0.000000'}</span>
                      </div>
                      
                      <div className="info-box">
                        <h5>Default Material Densities (kg/m³):</h5>
                        <ul>
                          <li>Water: 1,000 kg/m³</li>
                          <li>Soil: 1,600 kg/m³</li>
                          <li>Murrum: 1,800 kg/m³</li>
                          <li>Hard Rock: 2,700 kg/m³</li>
                          <li>Other Material: 1,000 kg/m³ (customizable)</li>
                        </ul>
                        <p><em>Note: These are typical values. You can edit the density value as needed for any material.</em></p>
                      </div>
                      
                      <div className="formula-info">
                        <h5>Formula Used:</h5>
                        <p><strong>Volume (m³) = Weight (kg) ÷ Density (kg/m³)</strong></p>
                        <p>Example: 1000 kg ÷ 1000 kg/m³ = 1.000 m³</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Wind Resource Calculator */}
              {activeTab === 'wind' && (
                <div className="tool-panel">
                  <h3>💨 Wind Resource Calculator</h3>
                  <div className="calculator-grid">
                    <div className="calc-section">
                      <h4>Wind Parameters</h4>
                      <div className="input-group">
                        <label>Wind Speed (m/s):</label>
                        <input
                          type="number"
                          value={windSpeed}
                          onChange={(e) => setWindSpeed(e.target.value)}
                          placeholder="e.g., 8.5"
                        />
                      </div>
                      <div className="input-group">
                        <label>Air Density (kg/m³):</label>
                        <input
                          type="number"
                          value={airDensity}
                          onChange={(e) => setAirDensity(e.target.value)}
                          placeholder="1.225 (sea level)"
                        />
                      </div>
                      <div className="input-group">
                        <label>Turbine Rotor Radius (m):</label>
                        <input
                          type="number"
                          value={turbineRadius}
                          onChange={(e) => setTurbineRadius(e.target.value)}
                          placeholder="e.g., 50"
                        />
                      </div>
                      <button className="calc-btn" onClick={calculateWindPower}>
                        Calculate Wind Power
                      </button>
                    </div>
                    
                    <div className="results-section">
                      <h4>Results</h4>
                      <div className="result-item">
                        <label>Available Wind Power:</label>
                        <span>{windPower} kW</span>
                      </div>
                      <div className="result-item">
                        <label>Wind Energy Density:</label>
                        <span>{windEnergyDensity} W/m²</span>
                      </div>
                      <div className="info-box">
                        <h5>Wind Speed Classifications:</h5>
                        <ul>
                          <li>Poor: &lt; 4 m/s (Class 1)</li>
                          <li>Fair: 4-5 m/s (Class 2)</li>
                          <li>Good: 5-6 m/s (Class 3)</li>
                          <li>Very Good: 6-7 m/s (Class 4)</li>
                          <li>Excellent: &gt; 7 m/s (Class 5+)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Solar Resource Calculator */}
              {activeTab === 'solar' && (
                <div className="tool-panel">
                  <h3>☀️ Solar Resource Calculator</h3>
                  <div className="calculator-grid">
                    <div className="calc-section">
                      <h4>Solar Parameters</h4>
                      <div className="input-group">
                        <label>Solar Irradiance (W/m²):</label>
                        <input
                          type="number"
                          value={solarIrradiance}
                          onChange={(e) => setSolarIrradiance(e.target.value)}
                          placeholder="e.g., 1000"
                        />
                      </div>
                      <div className="input-group">
                        <label>Panel Area (m²):</label>
                        <input
                          type="number"
                          value={panelArea}
                          onChange={(e) => setPanelArea(e.target.value)}
                          placeholder="e.g., 20"
                        />
                      </div>
                      <div className="input-group">
                        <label>Panel Efficiency (%):</label>
                        <input
                          type="number"
                          value={panelEfficiency}
                          onChange={(e) => setPanelEfficiency(e.target.value)}
                          placeholder="20"
                        />
                      </div>
                      <div className="input-group">
                        <label>Peak Sun Hours:</label>
                        <input
                          type="number"
                          value={sunHours}
                          onChange={(e) => setSunHours(e.target.value)}
                          placeholder="5"
                        />
                      </div>
                      <button className="calc-btn" onClick={calculateSolarPower}>
                        Calculate Solar Power
                      </button>
                    </div>
                    
                    <div className="results-section">
                      <h4>Results</h4>
                      <div className="result-item">
                        <label>Solar Power Output:</label>
                        <span>{solarPower} W</span>
                      </div>
                      <div className="result-item">
                        <label>Daily Energy Production:</label>
                        <span>{dailyEnergy} kWh</span>
                      </div>
                      <div className="info-box">
                        <h5>Solar Irradiance Levels:</h5>
                        <ul>
                          <li>Peak: 1000 W/m² (STC)</li>
                          <li>Good: 800-1000 W/m²</li>
                          <li>Fair: 500-800 W/m²</li>
                          <li>Poor: &lt; 500 W/m²</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Soil Testing Calculator */}
              {activeTab === 'soil' && (
                <div className="tool-panel">
                  <h3>🏗️ Soil Testing Calculator</h3>
                  <div className="calculator-grid">
                    <div className="calc-section">
                      <h4>Soil Parameters</h4>
                      <div className="input-group">
                        <label>Soil Type:</label>
                        <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
                          <option value="clay">Clay</option>
                          <option value="sand">Sand</option>
                          <option value="silt">Silt</option>
                          <option value="gravel">Gravel</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Cohesion (kPa):</label>
                        <input
                          type="number"
                          value={cohesion}
                          onChange={(e) => setCohesion(e.target.value)}
                          placeholder="e.g., 50"
                        />
                      </div>
                      <div className="input-group">
                        <label>Friction Angle (degrees):</label>
                        <input
                          type="number"
                          value={frictionAngle}
                          onChange={(e) => setFrictionAngle(e.target.value)}
                          placeholder="e.g., 30"
                        />
                      </div>
                      <div className="input-group">
                        <label>Dry Density (kN/m³):</label>
                        <input
                          type="number"
                          value={dryDensity}
                          onChange={(e) => setDryDensity(e.target.value)}
                          placeholder="e.g., 18"
                        />
                      </div>
                      <button className="calc-btn" onClick={calculateBearingCapacity}>
                        Calculate Bearing Capacity
                      </button>
                    </div>
                    
                    <div className="results-section">
                      <h4>Results</h4>
                      <div className="result-item">
                        <label>Safe Bearing Capacity:</label>
                        <span>{bearingCapacity} kPa</span>
                      </div>
                      <div className="info-box">
                        <h5>Typical Bearing Capacities:</h5>
                        <ul>
                          <li>Clay (soft): 75-150 kPa</li>
                          <li>Clay (stiff): 150-300 kPa</li>
                          <li>Sand (loose): 100-200 kPa</li>
                          <li>Sand (dense): 300-600 kPa</li>
                          <li>Rock: &gt; 1000 kPa</li>
                        </ul>
                      </div>
                      <div className="process-info">
                        <h5>Soil Testing Process:</h5>
                        <ol>
                          <li>Site investigation and sampling</li>
                          <li>Laboratory testing (grain size, Atterberg limits)</li>
                          <li>In-situ testing (SPT, CPT)</li>
                          <li>Shear strength testing</li>
                          <li>Bearing capacity analysis</li>
                          <li>Foundation design recommendations</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Water Testing (IS 456:2000 & IS 3025 Compliant) */}
              {activeTab === 'water' && (
                <div className="tool-panel">
                  <h3>💧 Water Testing (IS 456:2000 & IS 3025)</h3>
                  <p>Water quality assessment for concrete mixing as per Indian Standards</p>
                  <div className="calculator-grid">
                    <div className="calc-section">
                      <h4>Required Parameters</h4>
                      <div className="input-group">
                        <label>pH Value:</label>
                        <input
                          type="number"
                          step="0.1"
                          value={waterPH}
                          onChange={(e) => setWaterPH(e.target.value)}
                          placeholder="6.0 - 8.5"
                        />
                      </div>
                      <div className="input-group">
                        <label>Total Dissolved Solids (mg/L):</label>
                        <input
                          type="number"
                          value={tds}
                          onChange={(e) => setTds(e.target.value)}
                          placeholder="Max 2000"
                        />
                      </div>
                      <div className="input-group">
                        <label>Turbidity (NTU):</label>
                        <input
                          type="number"
                          step="0.1"
                          value={turbidity}
                          onChange={(e) => setTurbidity(e.target.value)}
                          placeholder="Max 10"
                        />
                      </div>
                      <div className="input-group">
                        <label>Chloride (mg/L):</label>
                        <input
                          type="number"
                          value={chloride}
                          onChange={(e) => setChloride(e.target.value)}
                          placeholder="Max 1000"
                        />
                      </div>
                      <div className="input-group">
                        <label>Sulphate (mg/L):</label>
                        <input
                          type="number"
                          value={sulphate}
                          onChange={(e) => setSulphate(e.target.value)}
                          placeholder="Max 400"
                        />
                      </div>
                      
                      <h4>Optional Parameters</h4>
                      <div className="input-group">
                        <label>Total Hardness (mg/L as CaCO₃):</label>
                        <input
                          type="number"
                          value={totalHardness}
                          onChange={(e) => setTotalHardness(e.target.value)}
                          placeholder="Max 600 (optional)"
                        />
                      </div>
                      <div className="input-group">
                        <label>Alkalinity (mg/L as CaCO₃):</label>
                        <input
                          type="number"
                          value={alkalinity}
                          onChange={(e) => setAlkalinity(e.target.value)}
                          placeholder="Max 200 (optional)"
                        />
                      </div>
                      <div className="input-group">
                        <label>Organic Matter (mg/L):</label>
                        <input
                          type="number"
                          value={organicMatter}
                          onChange={(e) => setOrganicMatter(e.target.value)}
                          placeholder="Max 200 (optional)"
                        />
                      </div>
                      
                      <button className="calc-btn" onClick={assessWaterQuality}>
                        Assess Water Quality
                      </button>
                    </div>
                    
                    <div className="results-section">
                      <h4>Assessment Results</h4>
                      <div className="result-item">
                        <label>Overall Suitability:</label>
                        <span className={`quality-result ${detailedResults.overall?.toLowerCase().replace(' ', '-')}`}>
                          {detailedResults.overall || 'Not Assessed'}
                        </span>
                      </div>
                      
                      {Object.keys(detailedResults).length > 0 && (
                        <>
                          <div className="compliance-table">
                            <h5>Parameter Compliance:</h5>
                            <table>
                              <thead>
                                <tr>
                                  <th>Parameter</th>
                                  <th>Result</th>
                                  <th>Limit</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>pH</td>
                                  <td>{detailedResults.testResults?.ph}</td>
                                  <td>6.0 - 8.5</td>
                                  <td className={detailedResults.compliance?.ph?.toLowerCase()}>{detailedResults.compliance?.ph}</td>
                                </tr>
                                <tr>
                                  <td>TDS (mg/L)</td>
                                  <td>{detailedResults.testResults?.tds}</td>
                                  <td>≤ 2000</td>
                                  <td className={detailedResults.compliance?.tds?.toLowerCase()}>{detailedResults.compliance?.tds}</td>
                                </tr>
                                <tr>
                                  <td>Turbidity (NTU)</td>
                                  <td>{detailedResults.testResults?.turbidity}</td>
                                  <td>≤ 10</td>
                                  <td className={detailedResults.compliance?.turbidity?.toLowerCase()}>{detailedResults.compliance?.turbidity}</td>
                                </tr>
                                <tr>
                                  <td>Chloride (mg/L)</td>
                                  <td>{detailedResults.testResults?.chloride}</td>
                                  <td>≤ 1000</td>
                                  <td className={detailedResults.compliance?.chloride?.toLowerCase()}>{detailedResults.compliance?.chloride}</td>
                                </tr>
                                <tr>
                                  <td>Sulphate (mg/L)</td>
                                  <td>{detailedResults.testResults?.sulphate}</td>
                                  <td>≤ 400</td>
                                  <td className={detailedResults.compliance?.sulphate?.toLowerCase()}>{detailedResults.compliance?.sulphate}</td>
                                </tr>
                                {detailedResults.testResults?.totalHardness > 0 && (
                                  <tr>
                                    <td>Total Hardness</td>
                                    <td>{detailedResults.testResults?.totalHardness}</td>
                                    <td>≤ 600</td>
                                    <td className={detailedResults.compliance?.totalHardness?.toLowerCase()}>{detailedResults.compliance?.totalHardness}</td>
                                  </tr>
                                )}
                                {detailedResults.testResults?.alkalinity > 0 && (
                                  <tr>
                                    <td>Alkalinity</td>
                                    <td>{detailedResults.testResults?.alkalinity}</td>
                                    <td>≤ 200</td>
                                    <td className={detailedResults.compliance?.alkalinity?.toLowerCase()}>{detailedResults.compliance?.alkalinity}</td>
                                  </tr>
                                )}
                                {detailedResults.testResults?.organicMatter > 0 && (
                                  <tr>
                                    <td>Organic Matter</td>
                                    <td>{detailedResults.testResults?.organicMatter}</td>
                                    <td>≤ 200</td>
                                    <td className={detailedResults.compliance?.organicMatter?.toLowerCase()}>{detailedResults.compliance?.organicMatter}</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="print-section">
                            <button 
                              className="print-btn" 
                              onClick={() => setShowPrintView(true)}
                            >
                              🖨️ Generate Print Report
                            </button>
                          </div>
                        </>
                      )}
                      
                      <div className="info-box">
                        <h5>IS 456:2000 Standards for Concrete Mixing Water:</h5>
                        <ul>
                          <li>pH: 6.0 - 8.5</li>
                          <li>TDS: ≤ 2000 mg/L</li>
                          <li>Turbidity: ≤ 10 NTU</li>
                          <li>Chloride: ≤ 1000 mg/L</li>
                          <li>Sulphate: ≤ 400 mg/L</li>
                          <li>Total Hardness: ≤ 600 mg/L as CaCO₃</li>
                          <li>Alkalinity: ≤ 200 mg/L as CaCO₃</li>
                          <li>Organic Matter: ≤ 200 mg/L</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Print View Modal */}
              {showPrintView && Object.keys(detailedResults).length > 0 && (
                <div className="print-modal">
                  <div className="print-content">
                    <div className="print-header">
                      <h2>WATER QUALITY TEST REPORT</h2>
                      <p>As per IS 456:2000 & IS 3025 Indian Standards</p>
                      <div className="test-info">
                        <p><strong>Test Date:</strong> {detailedResults.testDate}</p>
                        <p><strong>Test Time:</strong> {detailedResults.testTime}</p>
                        <p><strong>Report Generated by:</strong> VR Eco Energy Engineering Tools</p>
                      </div>
                    </div>
                    
                    <div className="print-results">
                      <h3>OVERALL ASSESSMENT</h3>
                      <div className={`assessment-result ${detailedResults.overall?.toLowerCase().replace(' ', '-')}`}>
                        <strong>Water Suitability: {detailedResults.overall}</strong>
                      </div>
                      
                      <h3>TEST RESULTS & COMPLIANCE</h3>
                      <table className="print-table">
                        <thead>
                          <tr>
                            <th>Parameter</th>
                            <th>Test Result</th>
                            <th>IS 456:2000 Limit</th>
                            <th>Unit</th>
                            <th>Compliance Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>pH Value</td>
                            <td>{detailedResults.testResults?.ph}</td>
                            <td>6.0 - 8.5</td>
                            <td>-</td>
                            <td className={detailedResults.compliance?.ph?.toLowerCase()}>{detailedResults.compliance?.ph}</td>
                          </tr>
                          <tr>
                            <td>Total Dissolved Solids</td>
                            <td>{detailedResults.testResults?.tds}</td>
                            <td>≤ 2000</td>
                            <td>mg/L</td>
                            <td className={detailedResults.compliance?.tds?.toLowerCase()}>{detailedResults.compliance?.tds}</td>
                          </tr>
                          <tr>
                            <td>Turbidity</td>
                            <td>{detailedResults.testResults?.turbidity}</td>
                            <td>≤ 10</td>
                            <td>NTU</td>
                            <td className={detailedResults.compliance?.turbidity?.toLowerCase()}>{detailedResults.compliance?.turbidity}</td>
                          </tr>
                          <tr>
                            <td>Chloride Content</td>
                            <td>{detailedResults.testResults?.chloride}</td>
                            <td>≤ 1000</td>
                            <td>mg/L</td>
                            <td className={detailedResults.compliance?.chloride?.toLowerCase()}>{detailedResults.compliance?.chloride}</td>
                          </tr>
                          <tr>
                            <td>Sulphate Content</td>
                            <td>{detailedResults.testResults?.sulphate}</td>
                            <td>≤ 400</td>
                            <td>mg/L</td>
                            <td className={detailedResults.compliance?.sulphate?.toLowerCase()}>{detailedResults.compliance?.sulphate}</td>
                          </tr>
                          {detailedResults.testResults?.totalHardness > 0 && (
                            <tr>
                              <td>Total Hardness</td>
                              <td>{detailedResults.testResults?.totalHardness}</td>
                              <td>≤ 600</td>
                              <td>mg/L as CaCO₃</td>
                              <td className={detailedResults.compliance?.totalHardness?.toLowerCase()}>{detailedResults.compliance?.totalHardness}</td>
                            </tr>
                          )}
                          {detailedResults.testResults?.alkalinity > 0 && (
                            <tr>
                              <td>Alkalinity</td>
                              <td>{detailedResults.testResults?.alkalinity}</td>
                              <td>≤ 200</td>
                              <td>mg/L as CaCO₃</td>
                              <td className={detailedResults.compliance?.alkalinity?.toLowerCase()}>{detailedResults.compliance?.alkalinity}</td>
                            </tr>
                          )}
                          {detailedResults.testResults?.organicMatter > 0 && (
                            <tr>
                              <td>Organic Matter</td>
                              <td>{detailedResults.testResults?.organicMatter}</td>
                              <td>≤ 200</td>
                              <td>mg/L</td>
                              <td className={detailedResults.compliance?.organicMatter?.toLowerCase()}>{detailedResults.compliance?.organicMatter}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      
                      {detailedResults.issues && detailedResults.issues.length > 0 && (
                        <div className="issues-section">
                          <h3>ISSUES IDENTIFIED</h3>
                          <ul>
                            {detailedResults.issues.map((issue, index) => (
                              <li key={index}>{issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="standards-section">
                        <h3>REFERENCE STANDARDS</h3>
                        <p><strong>IS 456:2000</strong> - Plain and Reinforced Concrete - Code of Practice</p>
                        <p><strong>IS 3025</strong> - Methods of Sampling and Test (Physical and Chemical) for Water and Wastewater</p>
                      </div>
                      
                      <div className="disclaimer">
                        <p><em>This report is generated for reference purposes only. For official certification, please consult an accredited laboratory.</em></p>
                      </div>
                    </div>
                    
                    <div className="print-actions">
                      <button onClick={() => window.print()}>🖨️ Print Report</button>
                      <button onClick={() => setShowPrintView(false)}>❌ Close</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Wind Data Map */}
              {activeTab === 'windmap' && (
                <div className="tool-panel">
                  <h3>🗺️ Wind Data Map</h3>
                  <div className="map-section">
                    <div className="map-info">
                      <h4>India Wind Resource Map</h4>
                      <p>Gujarat state has excellent wind resources, particularly in:</p>
                      <ul>
                        <li><strong>Kutch District:</strong> 7-9 m/s average wind speed</li>
                        <li><strong>Jamnagar:</strong> 6-8 m/s average wind speed</li>
                        <li><strong>Rajkot:</strong> 6-7 m/s average wind speed</li>
                        <li><strong>Surendranagar:</strong> 5-7 m/s average wind speed</li>
                      </ul>
                    </div>
                    <div className="wind-zones">
                      <h4>Wind Speed Classifications</h4>
                      <div className="zone-grid">
                        <div className="zone-item zone-1">
                          <span className="zone-color"></span>
                          <div>
                            <strong>Zone 1:</strong> &lt; 4 m/s<br/>
                            <small>Poor wind resource</small>
                          </div>
                        </div>
                        <div className="zone-item zone-2">
                          <span className="zone-color"></span>
                          <div>
                            <strong>Zone 2:</strong> 4-5 m/s<br/>
                            <small>Fair wind resource</small>
                          </div>
                        </div>
                        <div className="zone-item zone-3">
                          <span className="zone-color"></span>
                          <div>
                            <strong>Zone 3:</strong> 5-6 m/s<br/>
                            <small>Good wind resource</small>
                          </div>
                        </div>
                        <div className="zone-item zone-4">
                          <span className="zone-color"></span>
                          <div>
                            <strong>Zone 4:</strong> 6-7 m/s<br/>
                            <small>Very good wind resource</small>
                          </div>
                        </div>
                        <div className="zone-item zone-5">
                          <span className="zone-color"></span>
                          <div>
                            <strong>Zone 5:</strong> &gt; 7 m/s<br/>
                            <small>Excellent wind resource</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-sources">
                      <h4>Data Sources & References</h4>
                      <ul>
                        <li>National Institute of Wind Energy (NIWE)</li>
                        <li>India Meteorological Department (IMD)</li>
                        <li>Global Wind Atlas</li>
                        <li>Gujarat Energy Development Agency (GEDA)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Utility;