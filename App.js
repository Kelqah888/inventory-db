import React, { useState } from 'react';
import './App.css';

function InventoryDatabase() {
  const initialProducts = [
    {"name": "A376 256GB", "imei": "357050941000345", "sku": "A2-001"},
    {"name": "A376 256GB", "imei": "357050941195616", "sku": "A2-002"},
    {"name": "A376 256GB", "imei": "357050941196176", "sku": "A2-003"},
    {"name": "A376 256GB", "imei": "357050941196374", "sku": "A2-004"},
    {"name": "A376 256GB", "imei": "357050941197356", "sku": "A2-005"},
    {"name": "A376 256GB", "imei": "357050941197299", "sku": "A2-006"},
    {"name": "A376 256GB", "imei": "357050941196309", "sku": "A2-007"},
    {"name": "A376 256GB", "imei": "357050941197380", "sku": "A2-008"},
    {"name": "A376 256GB", "imei": "357050941196267", "sku": "A2-009"},
    {"name": "A376 256GB", "imei": "357050941196093", "sku": "A2-010"},
    {"name": "A376 256GB", "imei": "357050941197406", "sku": "A2-011"},
    {"name": "A376 256GB", "imei": "357050941196564", "sku": "A2-012"},
    {"name": "A376 256GB", "imei": "357050941102844", "sku": "A2-013"},
    {"name": "A376 256GB", "imei": "357050941196598", "sku": "A2-014"},
    {"name": "A376 256GB", "imei": "357050941196028", "sku": "A2-015"},
    {"name": "A376 256GB", "imei": "357050941102869", "sku": "A2-016"},
    {"name": "A376 256GB", "imei": "357050941195988", "sku": "A2-017"},
    {"name": "A376 256GB", "imei": "357050941197364", "sku": "A2-018"},
    {"name": "A376 256GB", "imei": "357050941196507", "sku": "A2-019"},
    {"name": "A376 256GB", "imei": "357050941197331", "sku": "A2-020"},
    {"name": "A376 256GB", "imei": "357050941196341", "sku": "A2-021"},
    {"name": "A376 256GB", "imei": "357050941195111", "sku": "A2-022"},
    {"name": "A376 256GB", "imei": "357050941195152", "sku": "A2-023"},
    {"name": "A376 256GB", "imei": "357050941102935", "sku": "A2-024"},
    {"name": "A376 256GB", "imei": "357050941195210", "sku": "A2-025"},
    {"name": "A376 256GB", "imei": "357050941195640", "sku": "A2-026"},
    {"name": "A376 256GB", "imei": "357050941195707", "sku": "A2-027"},
    {"name": "A376 256GB", "imei": "357050941195160", "sku": "A2-028"},
    {"name": "A376 256GB", "imei": "357050941196556", "sku": "A2-029"},
    {"name": "A376 256GB", "imei": "357050941196846", "sku": "A2-030"},
    {"name": "A376 256GB", "imei": "357050941197398", "sku": "A2-031"},
    {"name": "A376 256GB", "imei": "357050941195301", "sku": "A2-032"},
    {"name": "A376 256GB", "imei": "357050941195467", "sku": "A2-033"},
    {"name": "A376 256GB", "imei": "357050941195657", "sku": "A2-034"},
    {"name": "A376 256GB", "imei": "357050941197216", "sku": "A2-035"},
    {"name": "A376 256GB", "imei": "357050941197349", "sku": "A2-036"},
    {"name": "A376 256GB", "imei": "357050941195525", "sku": "A2-037"},
    {"name": "A376 256GB", "imei": "357050941197240", "sku": "A2-038"},
    {"name": "A376 256GB", "imei": "357050941195145", "sku": "A2-039"},
    {"name": "A376 256GB", "imei": "357050941195624", "sku": "A2-040"},
    {"name": "A576 256GB", "imei": "350357922119656", "sku": "A2-001"},
    {"name": "A576 256GB", "imei": "350357922117817", "sku": "A2-002"},
    {"name": "A576 256GB", "imei": "350357922126420", "sku": "A2-003"},
    {"name": "A576 256GB", "imei": "350357922126800", "sku": "A2-004"},
    {"name": "A576 256GB", "imei": "350357922120472", "sku": "A2-005"},
    {"name": "A576 256GB", "imei": "350357922126651", "sku": "A2-006"},
    {"name": "A576 256GB", "imei": "350357922119680", "sku": "A2-007"},
    {"name": "A576 256GB", "imei": "350357922117882", "sku": "A2-008"},
    {"name": "A576 256GB", "imei": "350357922120092", "sku": "A2-009"},
    {"name": "A576 256GB", "imei": "350357922119383", "sku": "A2-010"},
    {"name": "A576 256GB", "imei": "350357922121389", "sku": "A2-011"},
    {"name": "A576 256GB", "imei": "350357922124946", "sku": "A2-012"},
    {"name": "A576 256GB", "imei": "350357922123419", "sku": "A2-013"},
    {"name": "A576 256GB", "imei": "350357922125729", "sku": "A2-014"},
    {"name": "A576 256GB", "imei": "350357922125554", "sku": "A2-015"},
    {"name": "A576 256GB", "imei": "350357922119532", "sku": "A2-016"},
    {"name": "A576 256GB", "imei": "350357922121488", "sku": "A2-017"},
    {"name": "A576 256GB", "imei": "350357922126230", "sku": "A2-018"},
    {"name": "A576 256GB", "imei": "350357922119425", "sku": "A2-019"},
    {"name": "A576 256GB", "imei": "350357922118294", "sku": "A2-020"},
    {"name": "A576 256GB", "imei": "350357922121496", "sku": "A2-021"},
    {"name": "A576 256GB", "imei": "350357922119433", "sku": "A2-022"},
    {"name": "A576 256GB", "imei": "350357922125653", "sku": "A2-023"},
    {"name": "A576 256GB", "imei": "350357922125919", "sku": "A2-024"},
    {"name": "A576 256GB", "imei": "350357922125968", "sku": "A2-025"},
    {"name": "A576 256GB", "imei": "350357922121587", "sku": "A2-026"},
    {"name": "A576 256GB", "imei": "350357922126545", "sku": "A2-027"},
    {"name": "A576 256GB", "imei": "350357922126461", "sku": "A2-028"},
    {"name": "A576 256GB", "imei": "350357922126339", "sku": "A2-029"},
    {"name": "A576 256GB", "imei": "350357922125885", "sku": "A2-030"},
    {"name": "A17 4+128GB", "imei": "353436725354723", "sku": "A4-001"},
    {"name": "A17 4+128GB", "imei": "353436725354905", "sku": "A4-002"},
    {"name": "A17 4+128GB", "imei": "353436725366719", "sku": "A4-003"},
    {"name": "A17 4+128GB", "imei": "353436725356124", "sku": "A4-004"},
    {"name": "A17 4+128GB", "imei": "353436725399629", "sku": "A4-005"},
    {"name": "A17 4+128GB", "imei": "353436725355845", "sku": "A4-006"},
    {"name": "A17 4+128GB", "imei": "353436725399512", "sku": "A4-007"},
    {"name": "A17 4+128GB", "imei": "353436725361876", "sku": "A4-008"},
    {"name": "A17 4+128GB", "imei": "353436725355068", "sku": "A4-009"},
    {"name": "A17 4+128GB", "imei": "353436725356116", "sku": "A4-010"},
    {"name": "A17 4+128GB", "imei": "353436725367246", "sku": "A4-011"},
    {"name": "A17 4+128GB", "imei": "353436725399710", "sku": "A4-012"},
    {"name": "A17 4+128GB", "imei": "353436725345382", "sku": "A4-013"},
    {"name": "A17 4+128GB", "imei": "353436725351422", "sku": "A4-014"},
    {"name": "A17 4+128GB", "imei": "353436725407729", "sku": "A4-015"},
    {"name": "A17 4+128GB", "imei": "353436725399918", "sku": "A4-016"},
    {"name": "A17 4+128GB", "imei": "353436725084726", "sku": "A4-017"},
    {"name": "A17 4+128GB", "imei": "353436725399553", "sku": "A4-018"},
    {"name": "A17 4+128GB", "imei": "353436725399637", "sku": "A4-019"},
    {"name": "A17 4+128GB", "imei": "353436725356785", "sku": "A4-020"},
    {"name": "A17 4+128GB", "imei": "353436725355829", "sku": "A4-021"},
    {"name": "A17 4+128GB", "imei": "353436725356082", "sku": "A4-022"},
    {"name": "A17 4+128GB", "imei": "353436725371123", "sku": "A4-023"},
    {"name": "A17 4+128GB", "imei": "353436725389943", "sku": "A4-024"},
    {"name": "A17 4+128GB", "imei": "353436725394448", "sku": "A4-025"},
    {"name": "A17 4+128GB", "imei": "353436725343973", "sku": "A4-026"},
    {"name": "A17 4+128GB", "imei": "353436725387616", "sku": "A4-027"},
    {"name": "A17 4+128GB", "imei": "353436725362940", "sku": "A4-028"},
    {"name": "A17 4+128GB", "imei": "353436725387806", "sku": "A4-029"},
    {"name": "A17 4+128GB", "imei": "353436725343759", "sku": "A4-030"},
    {"name": "A17 4+128GB", "imei": "353436725394638", "sku": "A4-031"},
    {"name": "A17 4+128GB", "imei": "353436725390651", "sku": "A4-032"},
    {"name": "A17 4+128GB", "imei": "353436725343551", "sku": "A4-033"},
    {"name": "A17 4+128GB", "imei": "353436725342686", "sku": "A4-034"},
    {"name": "A17 4+128GB", "imei": "353436725343643", "sku": "A4-035"},
    {"name": "A17 4+128GB", "imei": "353436725387350", "sku": "A4-036"},
    {"name": "A17 4+128GB", "imei": "353436725394612", "sku": "A4-037"},
    {"name": "A17 4+128GB", "imei": "353436725389992", "sku": "A4-038"},
    {"name": "A17 4+128GB", "imei": "353436725387343", "sku": "A4-039"},
    {"name": "A17 4+128GB", "imei": "353436725389927", "sku": "A4-040"},
    {"name": "A17 4+128GB", "imei": "353436725372410", "sku": "A4-041"},
    {"name": "A17 4+128GB", "imei": "353436725390008", "sku": "A4-042"},
    {"name": "A17 4+128GB", "imei": "353436725395791", "sku": "A4-043"},
    {"name": "A17 4+128GB", "imei": "353436725389109", "sku": "A4-044"},
    {"name": "A17 4+128GB", "imei": "353436725401946", "sku": "A4-045"},
    {"name": "A17 4+128GB", "imei": "353436725390552", "sku": "A4-046"},
    {"name": "A17 4+128GB", "imei": "353436725390420", "sku": "A4-047"},
    {"name": "A17 4+128GB", "imei": "353436725402183", "sku": "A4-048"},
    {"name": "A17 4+128GB", "imei": "353436725400971", "sku": "A4-049"},
    {"name": "A17 4+128GB", "imei": "353436725397607", "sku": "A4-050"},
    {"name": "A17 4+128GB", "imei": "353436725397649", "sku": "A4-051"},
    {"name": "A17 4+128GB", "imei": "353436725397656", "sku": "A4-052"},
    {"name": "A17 4+128GB", "imei": "353436725402613", "sku": "A4-053"},
    {"name": "A17 4+128GB", "imei": "353436725389919", "sku": "A4-054"},
    {"name": "A17 4+128GB", "imei": "353436725400617", "sku": "A4-055"},
    {"name": "A17 4+128GB", "imei": "353436725389885", "sku": "A4-056"},
    {"name": "A17 4+128GB", "imei": "353436725397458", "sku": "A4-057"},
    {"name": "A17 4+128GB", "imei": "353436725402639", "sku": "A4-058"},
    {"name": "A17 4+128GB", "imei": "353436725389752", "sku": "A4-059"},
    {"name": "A17 4+128GB", "imei": "353436725389877", "sku": "A4-060"},
    {"name": "A17 4+128GB", "imei": "353436725401169", "sku": "A4-061"},
    {"name": "A17 4+128GB", "imei": "353436725389950", "sku": "A4-062"},
    {"name": "A17 4+128GB", "imei": "354112429778058", "sku": "A4-063"},
    {"name": "A17 4+128GB", "imei": "354112429757078", "sku": "A4-064"},
    {"name": "A17 4+128GB", "imei": "354112429397354", "sku": "A4-065"},
    {"name": "A17 4+128GB", "imei": "354112429772358", "sku": "A4-066"},
    {"name": "A17 4+128GB", "imei": "354112429779064", "sku": "A4-067"},
    {"name": "A17 4+128GB", "imei": "354112429779944", "sku": "A4-068"},
    {"name": "A17 4+128GB", "imei": "354112429779684", "sku": "A4-069"},
    {"name": "A17 4+128GB", "imei": "354112429772531", "sku": "A4-070"},
    {"name": "A17 4+128GB", "imei": "354112429784221", "sku": "A4-071"},
    {"name": "A17 4+128GB", "imei": "354112429753408", "sku": "A4-072"},
    {"name": "A17 4+128GB", "imei": "354112429779585", "sku": "A4-073"},
    {"name": "A17 4+128GB", "imei": "354112429771384", "sku": "A4-074"},
    {"name": "A17 4+128GB", "imei": "354112429753390", "sku": "A4-075"},
    {"name": "A17 4+128GB", "imei": "354112429783462", "sku": "A4-076"},
    {"name": "A17 4+128GB", "imei": "354112429780559", "sku": "A4-077"},
    {"name": "A17 4+128GB", "imei": "354112429753432", "sku": "A4-078"},
    {"name": "A17 4+128GB", "imei": "354112429777928", "sku": "A4-079"},
    {"name": "A17 4+128GB", "imei": "354112429783397", "sku": "A4-080"},
    {"name": "A17 4+128GB", "imei": "354112429783538", "sku": "A4-081"},
    {"name": "A17 4+128GB", "imei": "354112429780096", "sku": "A4-082"},
    {"name": "A17 4+128GB", "imei": "354112428266931", "sku": "A4-083"},
    {"name": "A17 4+128GB", "imei": "354112428245000", "sku": "A4-084"},
    {"name": "A17 4+128GB", "imei": "354112428251123", "sku": "A4-085"},
    {"name": "A17 4+128GB", "imei": "354112428273234", "sku": "A4-086"},
    {"name": "A17 4+128GB", "imei": "354112428241777", "sku": "A4-087"},
    {"name": "A17 4+128GB", "imei": "354112428242130", "sku": "A4-088"},
    {"name": "A17 4+128GB", "imei": "354112428243393", "sku": "A4-089"},
    {"name": "A17 4+128GB", "imei": "354112428274802", "sku": "A4-090"},
    {"name": "A17 4+128GB", "imei": "354112428245315", "sku": "A4-091"},
    {"name": "A17 4+128GB", "imei": "354112428265479", "sku": "A4-092"},
    {"name": "A17 4+128GB", "imei": "354112428669746", "sku": "A4-093"},
    {"name": "A17 4+128GB", "imei": "354112428266303", "sku": "A4-094"},
    {"name": "A17 4+128GB", "imei": "354112428274364", "sku": "A4-095"},
    {"name": "A17 4+128GB", "imei": "354112428242163", "sku": "A4-096"},
    {"name": "A17 4+128GB", "imei": "354112428261536", "sku": "A4-097"},
    {"name": "A17 4+128GB", "imei": "354112428244243", "sku": "A4-098"},
    {"name": "A17 4+128GB", "imei": "354112428267111", "sku": "A4-099"},
    {"name": "A17 4+128GB", "imei": "354112428575349", "sku": "A4-100"},
    {"name": "A17 4+128GB", "imei": "354112428273309", "sku": "A4-101"},
    {"name": "A17 4+128GB", "imei": "354112428274745", "sku": "A4-102"},
    {"name": "A17 4+128GB", "imei": "354112428251537", "sku": "A4-103"},
    {"name": "A17 4+128GB", "imei": "354112428260066", "sku": "A4-104"},
    {"name": "A17 4+128GB", "imei": "354112428249127", "sku": "A4-105"},
    {"name": "A17 4+128GB", "imei": "354112428247881", "sku": "A4-106"},
    {"name": "A17 4+128GB", "imei": "354112428259837", "sku": "A4-107"},
    {"name": "A17 4+128GB", "imei": "354112428250083", "sku": "A4-108"},
    {"name": "A17 4+128GB", "imei": "354112428249010", "sku": "A4-109"},
    {"name": "A17 4+128GB", "imei": "354112428259712", "sku": "A4-110"},
    {"name": "A17 4+128GB", "imei": "354112428260124", "sku": "A4-111"},
    {"name": "A17 4+128GB", "imei": "354112428248301", "sku": "A4-112"},
    {"name": "A17 4+128GB", "imei": "354112428249085", "sku": "A4-113"},
    {"name": "A17 4+128GB", "imei": "354112428243310", "sku": "A4-114"},
    {"name": "A17 4+128GB", "imei": "354112428241892", "sku": "A4-115"},
    {"name": "A17 4+128GB", "imei": "354112428248483", "sku": "A4-116"},
    {"name": "A17 4+128GB", "imei": "354112428242213", "sku": "A4-117"},
    {"name": "A17 4+128GB", "imei": "354112428248392", "sku": "A4-118"},
    {"name": "A17 4+128GB", "imei": "354112428240969", "sku": "A4-119"},
    {"name": "A17 4+128GB", "imei": "354112428575430", "sku": "A4-120"},
    {"name": "A17 4+128GB", "imei": "354112428239011", "sku": "A4-121"},
    {"name": "A17 4+128GB", "imei": "354112428247808", "sku": "A4-122"},
    {"name": "A17 4+128GB", "imei": "354112428242510", "sku": "A4-123"},
    {"name": "A17 4+128GB", "imei": "354112428251974", "sku": "A4-124"},
    {"name": "A17 4+128GB", "imei": "354112428145465", "sku": "A4-125"},
    {"name": "A17 4+128GB", "imei": "354112428150515", "sku": "A4-126"},
    {"name": "A17 4+128GB", "imei": "354112428273440", "sku": "A4-127"},
    {"name": "A17 4+128GB", "imei": "354112428242866", "sku": "A4-128"},
    {"name": "A17 4+128GB", "imei": "354112428257526", "sku": "A4-129"},
    {"name": "A17 4+128GB", "imei": "354112428279447", "sku": "A4-130"},
    {"name": "A17 4+128GB", "imei": "354112428150473", "sku": "A4-131"},
    {"name": "A17 4+128GB", "imei": "354112428266006", "sku": "A4-132"},
    {"name": "A17 4+128GB", "imei": "354112428280155", "sku": "A4-133"},
    {"name": "A17 4+128GB", "imei": "354112428279348", "sku": "A4-134"},
    {"name": "A17 4+128GB", "imei": "354112428159847", "sku": "A4-135"},
    {"name": "A17 4+128GB", "imei": "354112428243039", "sku": "A4-136"},
    {"name": "A17 4+128GB", "imei": "354112428238906", "sku": "A4-137"},
    {"name": "A17 4+128GB", "imei": "354112428245299", "sku": "A4-138"},
    {"name": "A17 4+128GB", "imei": "354112428277052", "sku": "A4-139"},
    {"name": "A17 4+128GB", "imei": "354112428266501", "sku": "A4-140"},
    {"name": "A17 4+128GB", "imei": "354112428241801", "sku": "A4-141"},
    {"name": "A17 4+128GB", "imei": "354112428248491", "sku": "A4-142"},
    {"name": "A17 4+128GB", "imei": "354112428273796", "sku": "A4-143"},
    {"name": "A17 4+128GB", "imei": "354112428247451", "sku": "A4-144"},
    {"name": "A17 4+128GB", "imei": "354112428241215", "sku": "A4-145"},
    {"name": "A17 4+128GB", "imei": "354112428669464", "sku": "A4-146"},
    {"name": "A17 4+128GB", "imei": "354112428249705", "sku": "A4-147"},
    {"name": "A17 4+128GB", "imei": "354112428278605", "sku": "A4-148"},
    {"name": "A17 4+128GB", "imei": "354112428243336", "sku": "A4-149"},
    {"name": "A17 4+128GB", "imei": "354112428260165", "sku": "A4-150"}
  ];

  const [products, setProducts] = useState(initialProducts.map((p, i) => ({...p, id: i})));
  const [formData, setFormData] = useState({ name: '', imei: '', sku: '' });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(term) || 
      p.imei.toLowerCase().includes(term) || 
      p.sku.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.imei.trim() || !formData.sku.trim()) {
      alert('Please fill in all fields');
      return;
    }

    if (editingId !== null) {
      const updated = products.map(p => p.id === editingId ? { ...formData, id: editingId } : p);
      setProducts(updated);
      setFilteredProducts(updated);
      setEditingId(null);
    } else {
      const newProduct = { ...formData, id: Math.max(...products.map(p => p.id), 0) + 1 };
      setProducts([...products, newProduct]);
      setFilteredProducts([...products, newProduct]);
    }
    
    setFormData({ name: '', imei: '', sku: '' });
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setFormData({ name: product.name, imei: product.imei, sku: product.sku });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      setFilteredProducts(updated);
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', imei: '', sku: '' });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1 className="title">Inventory Database</h1>
          <p className="subtitle">{filteredProducts.length} of {products.length} products</p>
        </div>
        {!showForm && (
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            + Add product
          </button>
        )}
      </header>

      {!showForm && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name, IMEI, or SKU..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      )}

      {showForm && (
        <div className="form-card">
          <h3 className="form-title">
            {editingId !== null ? 'Edit product' : 'Add new product'}
          </h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="form-label">Product name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">IMEI number</label>
              <input
                type="text"
                name="imei"
                value={formData.imei}
                onChange={handleInputChange}
                placeholder="Enter IMEI number"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">SKU</label>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleInputChange}
                placeholder="Enter SKU"
                className="form-input"
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={handleCancel} className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {editingId !== null ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      )}

      {filteredProducts.length === 0 && !showForm ? (
        <div className="empty-state">
          <p className="empty-title">No products found</p>
          <p className="empty-subtitle">Try adjusting your search</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Product name</th>
                <th>IMEI number</th>
                <th>SKU</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td className="mono">{product.imei}</td>
                  <td className="mono">{product.sku}</td>
                  <td className="actions">
                    <button className="btn-icon" onClick={() => handleEdit(product)}>
                      ✎ Edit
                    </button>
                    <button className="btn-icon btn-danger" onClick={() => handleDelete(product.id)}>
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InventoryDatabase;
