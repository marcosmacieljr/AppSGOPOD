import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/styles';

export default function (props) {
    
    const [pod, setPod] = useState({

        estacaCadaMetro: '-70',
        bitolaPasseioPOD: '0',
        variacaoBitolaBase5POD: '0',
        superelevacaoRecalquePOD: '0',
        empenoBase2POD: '0',
        empenoBase10POD: '',
        flechaMedidaPOD: '0',
        variacaoFlechaBase3POD: '0',
        
        estacaCadaMetro1: '-69',
        bitolaPasseioPOD1: '0',
        variacaoBitolaBase5POD1: '0',
        superelevacaoRecalquePOD1: '0',
        empenoBase2POD1: '0',
        empenoBase10POD1: '',
        flechaMedidaPOD1: '0',
        variacaoFlechaBase3POD1: '0',

        estacaCadaMetro2: '-68',
        bitolaPasseioPOD2: '0',
        variacaoBitolaBase5POD2: '0',
        superelevacaoRecalquePOD2: '0',
        empenoBase2POD2: '0',
        empenoBase10POD2: '',
        flechaMedidaPOD2: '0',
        variacaoFlechaBase3POD2: '0',

        estacaCadaMetro3: '-67',
        bitolaPasseioPOD3: '0',
        variacaoBitolaBase5POD3: '0',
        superelevacaoRecalquePOD3: '0',
        empenoBase2POD3: '0',
        empenoBase10POD3: '',
        flechaMedidaPOD3: '0',
        variacaoFlechaBase3POD3: '0',

        estacaCadaMetro4: '-66',
        bitolaPasseioPOD4: '0',
        variacaoBitolaBase5POD4: '0',
        superelevacaoRecalquePOD4: '0',
        empenoBase2POD4: '0',
        empenoBase10POD4: '',
        flechaMedidaPOD4: '0',
        variacaoFlechaBase3POD4: '0',
        
        estacaCadaMetro5: '-65',
        bitolaPasseioPOD5: '0',
        variacaoBitolaBase5POD5: '0',
        superelevacaoRecalquePOD5: '0',
        empenoBase2POD5: '0',
        empenoBase10POD5: '',
        flechaMedidaPOD5: '0',
        variacaoFlechaBase3POD5: '0',

        estacaCadaMetro6: '-64',
        bitolaPasseioPOD6: '0',
        variacaoBitolaBase5POD6: '0',
        superelevacaoRecalquePOD6: '0',
        empenoBase2POD6: '0',
        empenoBase10POD6: '',
        flechaMedidaPOD6: '0',
        variacaoFlechaBase3POD6: '0',

        estacaCadaMetro7: '-63',
        bitolaPasseioPOD7: '0',
        variacaoBitolaBase5POD7: '0',
        superelevacaoRecalquePOD7: '0',
        empenoBase2POD7: '0',
        empenoBase10POD7: '',
        flechaMedidaPOD7: '0',
        variacaoFlechaBase3POD7: '0',

        estacaCadaMetro8: '-62',
        bitolaPasseioPOD8: '0',
        variacaoBitolaBase5POD8: '0',
        superelevacaoRecalquePOD8: '0',
        empenoBase2POD8: '0',
        empenoBase10POD8: '',
        flechaMedidaPOD8: '0',
        variacaoFlechaBase3POD8: '0',

        estacaCadaMetro9: '-61',
        bitolaPasseioPOD9: '0',
        variacaoBitolaBase5POD9: '0',
        superelevacaoRecalquePOD9: '0',
        empenoBase2POD9: '0',
        empenoBase10POD9: '',
        flechaMedidaPOD9: '0',
        variacaoFlechaBase3POD9: '0',

        estacaCadaMetro10: '-60',
        bitolaPasseioPOD10: '0',
        variacaoBitolaBase5POD10: '0',
        superelevacaoRecalquePOD10: '0',
        empenoBase2POD10: '0',
        empenoBase10POD10: '',
        flechaMedidaPOD10: '0',
        variacaoFlechaBase3POD10: '0',

        estacaCadaMetro11: '-59',
        bitolaPasseioPOD11: '0',
        variacaoBitolaBase5POD11: '0',
        superelevacaoRecalquePOD11: '0',
        empenoBase2POD11: '0',
        empenoBase10POD11: '',
        flechaMedidaPOD11: '0',
        variacaoFlechaBase3POD11: '0',
        
        estacaCadaMetro12: '-58',
        bitolaPasseioPOD12: '0',
        variacaoBitolaBase5POD12: '0',
        superelevacaoRecalquePOD12: '0',
        empenoBase2POD12: '0',
        empenoBase10POD12: '',
        flechaMedidaPOD12: '0',
        variacaoFlechaBase3POD12: '0',
        
        estacaCadaMetro13: '-57',
        bitolaPasseioPOD13: '0',
        variacaoBitolaBase5POD13: '0',
        superelevacaoRecalquePOD13: '0',
        empenoBase2POD13: '0',
        empenoBase10POD13: '',
        flechaMedidaPOD13: '0',
        variacaoFlechaBase3POD13: '0',

        estacaCadaMetro14: '-56',
        bitolaPasseioPOD14: '0',
        variacaoBitolaBase5POD14: '0',
        superelevacaoRecalquePOD14: '0',
        empenoBase2POD14: '0',
        empenoBase10POD14: '',
        flechaMedidaPOD14: '0',
        variacaoFlechaBase3POD14: '0',

        estacaCadaMetro15: '-55',
        bitolaPasseioPOD15: '0',
        variacaoBitolaBase5POD15: '0',
        superelevacaoRecalquePOD15: '0',
        empenoBase2POD15: '0',
        empenoBase10POD15: '',
        flechaMedidaPOD15: '0',
        variacaoFlechaBase3POD15: '0',

        estacaCadaMetro16: '-54',
        bitolaPasseioPOD16: '0',
        variacaoBitolaBase5POD16: '0',
        superelevacaoRecalquePOD16: '0',
        empenoBase2POD16: '0',
        empenoBase10POD16: '',
        flechaMedidaPOD16: '0',
        variacaoFlechaBase3POD16: '0',

        estacaCadaMetro17: '-53',
        bitolaPasseioPOD17: '0',
        variacaoBitolaBase5POD17: '0',
        superelevacaoRecalquePOD17: '0',
        empenoBase2POD17: '0',
        empenoBase10POD17: '',
        flechaMedidaPOD17: '0',
        variacaoFlechaBase3POD17: '0',

        estacaCadaMetro18: '-52',
        bitolaPasseioPOD18: '0',
        variacaoBitolaBase5POD18: '0',
        superelevacaoRecalquePOD18: '0',
        empenoBase2POD18: '0',
        empenoBase10POD18: '',
        flechaMedidaPOD18: '0',
        variacaoFlechaBase3POD18: '0',

        estacaCadaMetro19: '-51',
        bitolaPasseioPOD19: '0',
        variacaoBitolaBase5POD19: '0',
        superelevacaoRecalquePOD19: '0',
        empenoBase2POD19: '0',
        empenoBase10POD19: '',
        flechaMedidaPOD19: '0',
        variacaoFlechaBase3POD19: '0',

        estacaCadaMetro20: '-50',
        bitolaPasseioPOD20: '0',
        variacaoBitolaBase5POD20: '0',
        superelevacaoRecalquePOD20: '0',
        empenoBase2POD20: '0',
        empenoBase10POD20: '',
        flechaMedidaPOD20: '0',
        variacaoFlechaBase3POD20: '0',

        estacaCadaMetro21: '-49',
        bitolaPasseioPOD21: '0',
        variacaoBitolaBase5POD21: '0',
        superelevacaoRecalquePOD21: '0',
        empenoBase2POD21: '0',
        empenoBase10POD21: '',
        flechaMedidaPOD21: '0',
        variacaoFlechaBase3POD21: '0',

        estacaCadaMetro22: '-48',
        bitolaPasseioPOD22: '0',
        variacaoBitolaBase5POD22: '0',
        superelevacaoRecalquePOD22: '0',
        empenoBase2POD22: '0',
        empenoBase10POD22: '',
        flechaMedidaPOD22: '0',
        variacaoFlechaBase3POD22: '0',

        estacaCadaMetro23: '-47',
        bitolaPasseioPOD23: '0',
        variacaoBitolaBase5POD23: '0',
        superelevacaoRecalquePOD23: '0',
        empenoBase2POD23: '0',
        empenoBase10POD23: '',
        flechaMedidaPOD23: '0',
        variacaoFlechaBase3POD23: '0',

        estacaCadaMetro24: '-46',
        bitolaPasseioPOD24: '0',
        variacaoBitolaBase5POD24: '0',
        superelevacaoRecalquePOD24: '0',
        empenoBase2POD24: '0',
        empenoBase10POD24: '',
        flechaMedidaPOD24: '0',
        variacaoFlechaBase3POD24: '0',

        estacaCadaMetro25: '-45',
        bitolaPasseioPOD25: '0',
        variacaoBitolaBase5POD25: '0',
        superelevacaoRecalquePOD25: '0',
        empenoBase2POD25: '0',
        empenoBase10POD25: '',
        flechaMedidaPOD25: '0',
        variacaoFlechaBase3POD25: '0',

        estacaCadaMetro26: '-44',
        bitolaPasseioPOD26: '0',
        variacaoBitolaBase5POD26: '0',
        superelevacaoRecalquePOD26: '0',
        empenoBase2POD26: '0',
        empenoBase10POD26: '',
        flechaMedidaPOD26: '0',
        variacaoFlechaBase3POD26: '0',

        estacaCadaMetro27: '-43',
        bitolaPasseioPOD27: '0',
        variacaoBitolaBase5POD27: '0',
        superelevacaoRecalquePOD27: '0',
        empenoBase2POD27: '0',
        empenoBase10POD27: '',
        flechaMedidaPOD27: '0',
        variacaoFlechaBase3POD27: '0',

        estacaCadaMetro28: '-42',
        bitolaPasseioPOD28: '0',
        variacaoBitolaBase5POD28: '0',
        superelevacaoRecalquePOD28: '0',
        empenoBase2POD28: '0',
        empenoBase10POD28: '',
        flechaMedidaPOD28: '0',
        variacaoFlechaBase3POD28: '0',

        estacaCadaMetro29: '-41',
        bitolaPasseioPOD29: '0',
        variacaoBitolaBase5POD29: '0',
        superelevacaoRecalquePOD29: '0',
        empenoBase2POD29: '0',
        empenoBase10POD29: '',
        flechaMedidaPOD29: '0',
        variacaoFlechaBase3POD29: '0',

        estacaCadaMetro30: '-40',
        bitolaPasseioPOD30: '0',
        variacaoBitolaBase5POD30: '0',
        superelevacaoRecalquePOD30: '0',
        empenoBase2POD30: '0',
        empenoBase10POD30: '',
        flechaMedidaPOD30: '0',
        variacaoFlechaBase3POD30: '0',

        estacaCadaMetro31: '-39',
        bitolaPasseioPOD31: '0',
        variacaoBitolaBase5POD31: '0',
        superelevacaoRecalquePOD31: '0',
        empenoBase2POD31: '0',
        empenoBase10POD31: '',
        flechaMedidaPOD31: '0',
        variacaoFlechaBase3POD31: '0',

        estacaCadaMetro32: '-38',
        bitolaPasseioPOD32: '0',
        variacaoBitolaBase5POD32: '0',
        superelevacaoRecalquePOD32: '0',
        empenoBase2POD32: '0',
        empenoBase10POD32: '',
        flechaMedidaPOD32: '0',
        variacaoFlechaBase3POD32: '0',

        estacaCadaMetro33: '-37',
        bitolaPasseioPOD33: '0',
        variacaoBitolaBase5POD33: '0',
        superelevacaoRecalquePOD33: '0',
        empenoBase2POD33: '0',
        empenoBase10POD33: '',
        flechaMedidaPOD33: '0',
        variacaoFlechaBase3POD33: '0',

        estacaCadaMetro34: '-36',
        bitolaPasseioPOD34: '0',
        variacaoBitolaBase5POD34: '0',
        superelevacaoRecalquePOD34: '0',
        empenoBase2POD34: '0',
        empenoBase10POD34: '',
        flechaMedidaPOD34: '0',
        variacaoFlechaBase3POD34: '0',

        estacaCadaMetro35: '-35',
        bitolaPasseioPOD35: '0',
        variacaoBitolaBase5POD35: '0',
        superelevacaoRecalquePOD35: '0',
        empenoBase2POD35: '0',
        empenoBase10POD35: '',
        flechaMedidaPOD35: '0',
        variacaoFlechaBase3POD35: '0',

        estacaCadaMetro36: '-34',
        bitolaPasseioPOD36: '0',
        variacaoBitolaBase5POD36: '0',
        superelevacaoRecalquePOD36: '0',
        empenoBase2POD36: '0',
        empenoBase10POD36: '',
        flechaMedidaPOD36: '0',
        variacaoFlechaBase3POD36: '0',

        estacaCadaMetro37: '-33',
        bitolaPasseioPOD37: '0',
        variacaoBitolaBase5POD37: '0',
        superelevacaoRecalquePOD37: '0',
        empenoBase2POD37: '0',
        empenoBase10POD37: '',
        flechaMedidaPOD37: '0',
        variacaoFlechaBase3POD37: '0',

        estacaCadaMetro38: '-32',
        bitolaPasseioPOD38: '0',
        variacaoBitolaBase5POD38: '0',
        superelevacaoRecalquePOD38: '0',
        empenoBase2POD38: '0',
        empenoBase10POD38: '',
        flechaMedidaPOD38: '0',
        variacaoFlechaBase3POD38: '0',

        estacaCadaMetro39: '-31',
        bitolaPasseioPOD39: '0',
        variacaoBitolaBase5POD39: '0',
        superelevacaoRecalquePOD39: '0',
        empenoBase2POD39: '0',
        empenoBase10POD39: '',
        flechaMedidaPOD39: '0',
        variacaoFlechaBase3POD39: '0',

        estacaCadaMetro40: '-30',
        bitolaPasseioPOD40: '0',
        variacaoBitolaBase5POD40: '0',
        superelevacaoRecalquePOD40: '0',
        empenoBase2POD40: '0',
        empenoBase10POD40: '',
        flechaMedidaPOD40: '0',
        variacaoFlechaBase3POD40: '0',

        estacaCadaMetro41: '-29',
        bitolaPasseioPOD41: '0',
        variacaoBitolaBase5POD41: '0',
        superelevacaoRecalquePOD41: '0',
        empenoBase2POD41: '0',
        empenoBase10POD41: '',
        flechaMedidaPOD41: '0',
        variacaoFlechaBase3POD41: '0',

        estacaCadaMetro42: '-28',
        bitolaPasseioPOD42: '0',
        variacaoBitolaBase5POD42: '0',
        superelevacaoRecalquePOD42: '0',
        empenoBase2POD42: '0',
        empenoBase10POD42: '',
        flechaMedidaPOD42: '0',
        variacaoFlechaBase3POD42: '0',

        estacaCadaMetro43: '-27',
        bitolaPasseioPOD43: '0',
        variacaoBitolaBase5POD43: '0',
        superelevacaoRecalquePOD43: '0',
        empenoBase2POD43: '0',
        empenoBase10POD43: '',
        flechaMedidaPOD43: '0',
        variacaoFlechaBase3POD43: '0',

        estacaCadaMetro44: '-26',
        bitolaPasseioPOD44: '0',
        variacaoBitolaBase5POD44: '0',
        superelevacaoRecalquePOD44: '0',
        empenoBase2POD44: '0',
        empenoBase10POD44: '',
        flechaMedidaPOD44: '0',
        variacaoFlechaBase3POD44: '0',

        estacaCadaMetro45: '-25',
        bitolaPasseioPOD45: '0',
        variacaoBitolaBase5POD45: '0',
        superelevacaoRecalquePOD45: '0',
        empenoBase2POD45: '0',
        empenoBase10POD45: '',
        flechaMedidaPOD45: '0',
        variacaoFlechaBase3POD45: '0',

        estacaCadaMetro46: '-24',
        bitolaPasseioPOD46: '0',
        variacaoBitolaBase5POD46: '0',
        superelevacaoRecalquePOD46: '0',
        empenoBase2POD46: '0',
        empenoBase10POD46: '',
        flechaMedidaPOD46: '0',
        variacaoFlechaBase3POD46: '0',

        estacaCadaMetro47: '-23',
        bitolaPasseioPOD47: '0',
        variacaoBitolaBase5POD47: '0',
        superelevacaoRecalquePOD47: '0',
        empenoBase2POD47: '0',
        empenoBase10POD47: '',
        flechaMedidaPOD47: '0',
        variacaoFlechaBase3POD47: '0',

        estacaCadaMetro48: '-22',
        bitolaPasseioPOD48: '0',
        variacaoBitolaBase5POD48: '0',
        superelevacaoRecalquePOD48: '0',
        empenoBase2POD48: '0',
        empenoBase10POD48: '',
        flechaMedidaPOD48: '0',
        variacaoFlechaBase3POD48: '0',

        estacaCadaMetro49: '-21',
        bitolaPasseioPOD49: '0',
        variacaoBitolaBase5POD49: '0',
        superelevacaoRecalquePOD49: '0',
        empenoBase2POD49: '0',
        empenoBase10POD49: '',
        flechaMedidaPOD49: '0',
        variacaoFlechaBase3POD49: '0',

        estacaCadaMetro50: '-20',
        bitolaPasseioPOD50: '0',
        variacaoBitolaBase5POD50: '0',
        superelevacaoRecalquePOD50: '0',
        empenoBase2POD50: '0',
        empenoBase10POD50: '',
        flechaMedidaPOD50: '0',
        variacaoFlechaBase3POD50: '0',

        estacaCadaMetro51: '-19',
        bitolaPasseioPOD51: '0',
        variacaoBitolaBase5POD51: '0',
        superelevacaoRecalquePOD51: '0',
        empenoBase2POD51: '0',
        empenoBase10POD51: '',
        flechaMedidaPOD51: '0',
        variacaoFlechaBase3POD51: '0',

        estacaCadaMetro52: '-18',
        bitolaPasseioPOD52: '0',
        variacaoBitolaBase5POD52: '0',
        superelevacaoRecalquePOD52: '0',
        empenoBase2POD52: '0',
        empenoBase10POD52: '',
        flechaMedidaPOD52: '0',
        variacaoFlechaBase3POD52: '0',

        estacaCadaMetro53: '-17',
        bitolaPasseioPOD53: '0',
        variacaoBitolaBase5POD53: '0',
        superelevacaoRecalquePOD53: '0',
        empenoBase2POD53: '0',
        empenoBase10POD53: '',
        flechaMedidaPOD53: '0',
        variacaoFlechaBase3POD53: '0',

        estacaCadaMetro54: '-16',
        bitolaPasseioPOD54: '0',
        variacaoBitolaBase5POD54: '0',
        superelevacaoRecalquePOD54: '0',
        empenoBase2POD54: '0',
        empenoBase10POD54: '',
        flechaMedidaPOD54: '0',
        variacaoFlechaBase3POD54: '0',

        estacaCadaMetro55: '-15',
        bitolaPasseioPOD55: '0',
        variacaoBitolaBase5POD55: '0',
        superelevacaoRecalquePOD55: '0',
        empenoBase2POD55: '0',
        empenoBase10POD55: '',
        flechaMedidaPOD55: '0',
        variacaoFlechaBase3POD55: '0',

        estacaCadaMetro56: '-14',
        bitolaPasseioPOD56: '0',
        variacaoBitolaBase5POD56: '0',
        superelevacaoRecalquePOD56: '0',
        empenoBase2POD56: '0',
        empenoBase10POD56: '',
        flechaMedidaPOD56: '0',
        variacaoFlechaBase3POD56: '0',

        estacaCadaMetro57: '-13',
        bitolaPasseioPOD57: '0',
        variacaoBitolaBase5POD57: '0',
        superelevacaoRecalquePOD57: '0',
        empenoBase2POD57: '0',
        empenoBase10POD57: '',
        flechaMedidaPOD57: '0',
        variacaoFlechaBase3POD57: '0',

        estacaCadaMetro58: '-12',
        bitolaPasseioPOD58: '0',
        variacaoBitolaBase5POD58: '0',
        superelevacaoRecalquePOD58: '0',
        empenoBase2POD58: '0',
        empenoBase10POD58: '',
        flechaMedidaPOD58: '0',
        variacaoFlechaBase3POD58: '0',

        estacaCadaMetro59: '-11',
        bitolaPasseioPOD59: '0',
        variacaoBitolaBase5POD59: '0',
        superelevacaoRecalquePOD59: '0',
        empenoBase2POD59: '0',
        empenoBase10POD59: '',
        flechaMedidaPOD59: '0',
        variacaoFlechaBase3POD59: '0',

        estacaCadaMetro60: '-10',
        bitolaPasseioPOD60: '0',
        variacaoBitolaBase5POD60: '0',
        superelevacaoRecalquePOD60: '0',
        empenoBase2POD60: '0',
        empenoBase10POD60: '',
        flechaMedidaPOD60: '0',
        variacaoFlechaBase3POD60: '0',

        estacaCadaMetro61: '-9',
        bitolaPasseioPOD61: '0',
        variacaoBitolaBase5POD61: '0',
        superelevacaoRecalquePOD61: '0',
        empenoBase2POD61: '0',
        empenoBase10POD61: '',
        flechaMedidaPOD61: '0',
        variacaoFlechaBase3POD61: '0',

        estacaCadaMetro62: '-8',
        bitolaPasseioPOD62: '0',
        variacaoBitolaBase5POD62: '0',
        superelevacaoRecalquePOD62: '0',
        empenoBase2POD62: '0',
        empenoBase10POD62: '',
        flechaMedidaPOD62: '0',
        variacaoFlechaBase3POD62: '0',

        estacaCadaMetro63: '-7',
        bitolaPasseioPOD63: '0',
        variacaoBitolaBase5POD63: '0',
        superelevacaoRecalquePOD63: '0',
        empenoBase2POD63: '0',
        empenoBase10POD63: '',
        flechaMedidaPOD63: '0',
        variacaoFlechaBase3POD63: '0',

        estacaCadaMetro64: '-6',
        bitolaPasseioPOD64: '0',
        variacaoBitolaBase5POD64: '0',
        superelevacaoRecalquePOD64: '0',
        empenoBase2POD64: '0',
        empenoBase10POD64: '',
        flechaMedidaPOD64: '0',
        variacaoFlechaBase3POD64: '0',

        estacaCadaMetro65: '-5',
        bitolaPasseioPOD65: '0',
        variacaoBitolaBase5POD65: '0',
        superelevacaoRecalquePOD65: '0',
        empenoBase2POD65: '0',
        empenoBase10POD65: '',
        flechaMedidaPOD65: '0',
        variacaoFlechaBase3POD65: '0',

        estacaCadaMetro66: '-4',
        bitolaPasseioPOD66: '0',
        variacaoBitolaBase5POD66: '0',
        superelevacaoRecalquePOD66: '0',
        empenoBase2POD66: '0',
        empenoBase10POD66: '',
        flechaMedidaPOD66: '0',
        variacaoFlechaBase3POD66: '0',

        estacaCadaMetro67: '-3',
        bitolaPasseioPOD67: '0',
        variacaoBitolaBase5POD67: '0',
        superelevacaoRecalquePOD67: '0',
        empenoBase2POD67: '0',
        empenoBase10POD67: '',
        flechaMedidaPOD67: '0',
        variacaoFlechaBase3POD67: '0',

        estacaCadaMetro68: '-2',
        bitolaPasseioPOD68: '0',
        variacaoBitolaBase5POD68: '0',
        superelevacaoRecalquePOD68: '0',
        empenoBase2POD68: '0',
        empenoBase10POD68: '',
        flechaMedidaPOD68: '0',
        variacaoFlechaBase3POD68: '0',

        estacaCadaMetro69: '-1',
        bitolaPasseioPOD69: '0',
        variacaoBitolaBase5POD69: '0',
        superelevacaoRecalquePOD69: '0',
        empenoBase2POD69: '0',
        empenoBase10POD69: '',
        flechaMedidaPOD69: '0',
        variacaoFlechaBase3POD69: '0',

        estacaCadaMetro70: '0',
        bitolaPasseioPOD70: '0',
        variacaoBitolaBase5POD70: '0',
        superelevacaoRecalquePOD70: '0',
        empenoBase2POD70: '0',
        empenoBase10POD70: '',
        flechaMedidaPOD70: '0',
        variacaoFlechaBase3POD70: '0',

        estacaCadaMetro71: '1',
        bitolaPasseioPOD71: '0',
        variacaoBitolaBase5POD71: '0',
        superelevacaoRecalquePOD71: '0',
        empenoBase2POD71: '0',
        empenoBase10POD71: '0',
        flechaMedidaPOD71: '0',
        variacaoFlechaBase3POD71: '0',

        estacaCadaMetro72: '2',
        bitolaPasseioPOD72: '0',
        variacaoBitolaBase5POD72: '0',
        superelevacaoRecalquePOD72: '0',
        empenoBase2POD72: '0',
        empenoBase10POD72: '',
        flechaMedidaPOD72: '0',
        variacaoFlechaBase3POD72: '0',

        estacaCadaMetro73: '3',
        bitolaPasseioPOD73: '0',
        variacaoBitolaBase5POD73: '0',
        superelevacaoRecalquePOD73: '0',
        empenoBase2POD73: '0',
        empenoBase10POD73: '',
        flechaMedidaPOD73: '0',
        variacaoFlechaBase3POD73: '0',

        estacaCadaMetro74: '4',
        bitolaPasseioPOD74: '0',
        variacaoBitolaBase5POD74: '0',
        superelevacaoRecalquePOD74: '0',
        empenoBase2POD74: '0',
        empenoBase10POD74: '',
        flechaMedidaPOD74: '0',
        variacaoFlechaBase3POD74: '0',

        estacaCadaMetro75: '5',
        bitolaPasseioPOD75: '0',
        variacaoBitolaBase5POD75: '0',
        superelevacaoRecalquePOD75: '0',
        empenoBase2POD75: '0',
        empenoBase10POD75: '',
        flechaMedidaPOD75: '0',
        variacaoFlechaBase3POD75: '0',

        estacaCadaMetro76: '6',
        bitolaPasseioPOD76: '0',
        variacaoBitolaBase5POD76: '0',
        superelevacaoRecalquePOD76: '0',
        empenoBase2POD76: '0',
        empenoBase10POD76: '',
        flechaMedidaPOD76: '0',
        variacaoFlechaBase3POD76: '0',

        estacaCadaMetro77: '7',
        bitolaPasseioPOD77: '0',
        variacaoBitolaBase5POD77: '0',
        superelevacaoRecalquePOD77: '0',
        empenoBase2POD77: '0',
        empenoBase10POD77: '',
        flechaMedidaPOD77: '0',
        variacaoFlechaBase3POD77: '0',

        estacaCadaMetro78: '8',
        bitolaPasseioPOD78: '0',
        variacaoBitolaBase5POD78: '0',
        superelevacaoRecalquePOD78: '0',
        empenoBase2POD78: '0',
        empenoBase10POD78: '',
        flechaMedidaPOD78: '0',
        variacaoFlechaBase3POD78: '0',

        estacaCadaMetro79: '9',
        bitolaPasseioPOD79: '0',
        variacaoBitolaBase5POD79: '0',
        superelevacaoRecalquePOD79: '0',
        empenoBase2POD79: '0',
        empenoBase10POD79: '',
        flechaMedidaPOD79: '0',
        variacaoFlechaBase3POD79: '0',

        estacaCadaMetro80: '10',
        bitolaPasseioPOD80: '0',
        variacaoBitolaBase5POD80: '0',
        superelevacaoRecalquePOD80: '0',
        empenoBase2POD80: '0',
        empenoBase10POD80: '',
        flechaMedidaPOD80: '0',
        variacaoFlechaBase3POD80: '0',

        estacaCadaMetro81: '11',
        bitolaPasseioPOD81: '0',
        variacaoBitolaBase5POD81: '0',
        superelevacaoRecalquePOD81: '0',
        empenoBase2POD81: '0',
        empenoBase10POD81: '',
        flechaMedidaPOD81: '0',
        variacaoFlechaBase3POD81: '0',

        estacaCadaMetro82: '12',
        bitolaPasseioPOD82: '0',
        variacaoBitolaBase5POD82: '0',
        superelevacaoRecalquePOD82: '0',
        empenoBase2POD82: '0',
        empenoBase10POD82: '',
        flechaMedidaPOD82: '0',
        variacaoFlechaBase3POD82: '0',

        estacaCadaMetro83: '13',
        bitolaPasseioPOD83: '0',
        variacaoBitolaBase5POD83: '0',
        superelevacaoRecalquePOD83: '0',
        empenoBase2POD83: '0',
        empenoBase10POD83: '',
        flechaMedidaPOD83: '0',
        variacaoFlechaBase3POD83: '0',

        estacaCadaMetro84: '14',
        bitolaPasseioPOD84: '0',
        variacaoBitolaBase5POD84: '0',
        superelevacaoRecalquePOD84: '0',
        empenoBase2POD84: '0',
        empenoBase10POD84: '',
        flechaMedidaPOD84: '0',
        variacaoFlechaBase3POD84: '0',

        estacaCadaMetro85: '15',
        bitolaPasseioPOD85: '0',
        variacaoBitolaBase5POD85: '0',
        superelevacaoRecalquePOD85: '0',
        empenoBase2POD85: '0',
        empenoBase10POD85: '',
        flechaMedidaPOD85: '0',
        variacaoFlechaBase3POD85: '0',

        estacaCadaMetro86: '16',
        bitolaPasseioPOD86: '0',
        variacaoBitolaBase5POD86: '0',
        superelevacaoRecalquePOD86: '0',
        empenoBase2POD86: '0',
        empenoBase10POD86: '',
        flechaMedidaPOD86: '0',
        variacaoFlechaBase3POD86: '0',

        estacaCadaMetro87: '17',
        bitolaPasseioPOD87: '0',
        variacaoBitolaBase5POD87: '0',
        superelevacaoRecalquePOD87: '0',
        empenoBase2POD87: '0',
        empenoBase10POD87: '',
        flechaMedidaPOD87: '0',
        variacaoFlechaBase3POD87: '0',

        estacaCadaMetro88: '18',
        bitolaPasseioPOD88: '0',
        variacaoBitolaBase5POD88: '0',
        superelevacaoRecalquePOD88: '0',
        empenoBase2POD88: '0',
        empenoBase10POD88: '',
        flechaMedidaPOD88: '0',
        variacaoFlechaBase3POD88: '0',

        estacaCadaMetro89: '19',
        bitolaPasseioPOD89: '0',
        variacaoBitolaBase5POD89: '0',
        superelevacaoRecalquePOD89: '0',
        empenoBase2POD89: '0',
        empenoBase10POD89: '',
        flechaMedidaPOD89: '0',
        variacaoFlechaBase3POD89: '0',

        estacaCadaMetro90: '20',
        bitolaPasseioPOD90: '0',
        variacaoBitolaBase5POD90: '0',
        superelevacaoRecalquePOD90: '0',
        empenoBase2POD90: '0',
        empenoBase10POD90: '',
        flechaMedidaPOD90: '0',
        variacaoFlechaBase3POD90: '0',

        estacaCadaMetro91: '21',
        bitolaPasseioPOD91: '0',
        variacaoBitolaBase5POD91: '0',
        superelevacaoRecalquePOD91: '0',
        empenoBase2POD91: '0',
        empenoBase10POD91: '',
        flechaMedidaPOD91: '0',
        variacaoFlechaBase3POD91: '0',

        estacaCadaMetro92: '22',
        bitolaPasseioPOD92: '0',
        variacaoBitolaBase5POD92: '0',
        superelevacaoRecalquePOD92: '0',
        empenoBase2POD92: '0',
        empenoBase10POD92: '',
        flechaMedidaPOD92: '0',
        variacaoFlechaBase3POD92: '0',

        estacaCadaMetro93: '23',
        bitolaPasseioPOD93: '0',
        variacaoBitolaBase5POD93: '0',
        superelevacaoRecalquePOD93: '0',
        empenoBase2POD93: '0',
        empenoBase10POD93: '',
        flechaMedidaPOD93: '0',
        variacaoFlechaBase3POD93: '0',

        estacaCadaMetro94: '24',
        bitolaPasseioPOD94: '0',
        variacaoBitolaBase5POD94: '0',
        superelevacaoRecalquePOD94: '0',
        empenoBase2POD94: '0',
        empenoBase10POD94: '',
        flechaMedidaPOD94: '0',
        variacaoFlechaBase3POD94: '0',

        estacaCadaMetro95: '25',
        bitolaPasseioPOD95: '0',
        variacaoBitolaBase5POD95: '0',
        superelevacaoRecalquePOD95: '0',
        empenoBase2POD95: '0',
        empenoBase10POD95: '',
        flechaMedidaPOD95: '0',
        variacaoFlechaBase3POD95: '0',

        estacaCadaMetro96: '26',
        bitolaPasseioPOD96: '0',
        variacaoBitolaBase5POD96: '0',
        superelevacaoRecalquePOD96: '0',
        empenoBase2POD96: '0',
        empenoBase10POD96: '',
        flechaMedidaPOD96: '0',
        variacaoFlechaBase3POD96: '0',

        estacaCadaMetro97: '27',
        bitolaPasseioPOD97: '0',
        variacaoBitolaBase5POD97: '0',
        superelevacaoRecalquePOD97: '0',
        empenoBase2POD97: '0',
        empenoBase10POD97: '',
        flechaMedidaPOD97: '0',
        variacaoFlechaBase3POD97: '0',

        estacaCadaMetro98: '28',
        bitolaPasseioPOD98: '0',
        variacaoBitolaBase5POD98: '0',
        superelevacaoRecalquePOD98: '0',
        empenoBase2POD98: '0',
        empenoBase10POD98: '',
        flechaMedidaPOD98: '0',
        variacaoFlechaBase3POD98: '0',

        estacaCadaMetro99: '29',
        bitolaPasseioPOD99: '0',
        variacaoBitolaBase5POD99: '0',
        superelevacaoRecalquePOD99: '0',
        empenoBase2POD99: '0',
        empenoBase10POD99: '',
        flechaMedidaPOD99: '0',
        variacaoFlechaBase3POD99: '0',

        estacaCadaMetro100: '30',
        bitolaPasseioPOD100: '0',
        variacaoBitolaBase5POD100: '0',
        superelevacaoRecalquePOD100: '0',
        empenoBase2POD100: '0',
        empenoBase10POD100: '',
        flechaMedidaPOD100: '0',
        variacaoFlechaBase3POD100: '0'

    })

    const novaMedida = (medida1, medida2) => {

        let medida = Math.abs(medida1 - medida2);        

        return (
            <Text style={styles.tablePODCol1}>{medida}</Text>
        );




    };

    return (

        <View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD: e })}
                        value={pod.bitolaPasseioPOD}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}></View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD: e })} 
                        value={pod.superelevacaoRecalquePOD} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD: e })}
                        value={pod.flechaMedidaPOD} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro1}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD1: e })}
                        value={pod.bitolaPasseioPOD1}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD1: e })} 
                        value={pod.superelevacaoRecalquePOD1} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD1: e })}
                        value={pod.flechaMedidaPOD1} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro2}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD2: e })}
                        value={pod.bitolaPasseioPOD2}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD2: e })} 
                        value={pod.superelevacaoRecalquePOD2} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD2) - (pod.superelevacaoRecalquePOD))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD2: e })}
                        value={pod.flechaMedidaPOD2} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro3}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD3: e })}
                        value={pod.bitolaPasseioPOD3}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD3) - (pod.bitolaPasseioPOD))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD3: e })}
                        value={pod.superelevacaoRecalquePOD3}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD3) - (pod.superelevacaoRecalquePOD1))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD3: e })}
                        value={pod.flechaMedidaPOD3} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD3) - (pod.flechaMedidaPOD))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro4}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD4: e })}
                        value={pod.bitolaPasseioPOD4}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD4) - (pod.bitolaPasseioPOD1))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD4: e })} 
                        value={pod.superelevacaoRecalquePOD4} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD4) - (pod.superelevacaoRecalquePOD2))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD4: e })}
                        value={pod.flechaMedidaPOD4} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD4) - (pod.flechaMedidaPOD1))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro5}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD5: e })}
                        value={pod.bitolaPasseioPOD5}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD5) - (pod.bitolaPasseioPOD2))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD5: e })} 
                        value={pod.superelevacaoRecalquePOD5} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD5) - (pod.superelevacaoRecalquePOD3))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD5: e })}
                        value={pod.flechaMedidaPOD5} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD5) - (pod.flechaMedidaPOD2))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro6}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD6: e })}
                        value={pod.bitolaPasseioPOD6}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD6) - (pod.bitolaPasseioPOD3))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD6: e })} 
                        value={pod.superelevacaoRecalquePOD6} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD6) - (pod.superelevacaoRecalquePOD4))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD6: e })}
                        value={pod.flechaMedidaPOD6} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD6) - (pod.flechaMedidaPOD3))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro7}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD7: e })}
                        value={pod.bitolaPasseioPOD7}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD7) - (pod.bitolaPasseioPOD4))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD7: e })} 
                        value={pod.superelevacaoRecalquePOD7} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD7) - (pod.superelevacaoRecalquePOD5))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD7: e })}
                        value={pod.flechaMedidaPOD7} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD7) - (pod.flechaMedidaPOD4))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro8}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD8: e })}
                        value={pod.bitolaPasseioPOD8}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD8) - (pod.bitolaPasseioPOD5))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD8: e })} 
                        value={pod.superelevacaoRecalquePOD8} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD8) - (pod.superelevacaoRecalquePOD6))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD8: e })}
                        value={pod.flechaMedidaPOD8} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD8) - (pod.flechaMedidaPOD5))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro9}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD9: e })}
                        value={pod.bitolaPasseioPOD9}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD9) - (pod.bitolaPasseioPOD6))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD9: e })} 
                        value={pod.superelevacaoRecalquePOD9} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD9) - (pod.superelevacaoRecalquePOD7))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD9: e })}
                        value={pod.flechaMedidaPOD9} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD9) - (pod.flechaMedidaPOD6))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro10}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD10: e })}
                        value={pod.bitolaPasseioPOD10}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD10) - (pod.bitolaPasseioPOD7))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD10: e })} 
                        value={pod.superelevacaoRecalquePOD10} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD10) - (pod.superelevacaoRecalquePOD8))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD10) - (pod.superelevacaoRecalquePOD))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD10: e })}
                        value={pod.flechaMedidaPOD10} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD10) - (pod.flechaMedidaPOD7))}</Text>
                </View>
            </View>




            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro11}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD11: e })}
                        value={pod.bitolaPasseioPOD11}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD11) - (pod.bitolaPasseioPOD8))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD11: e })} 
                        value={pod.superelevacaoRecalquePOD11} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD11) - (pod.superelevacaoRecalquePOD9))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD11) - (pod.superelevacaoRecalquePOD1))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD11: e })}
                        value={pod.flechaMedidaPOD11} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD11) - (pod.flechaMedidaPOD8))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro12}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD12: e })}
                        value={pod.bitolaPasseioPOD12}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD12) - (pod.bitolaPasseioPOD9))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD12: e })} 
                        value={pod.superelevacaoRecalquePOD12} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD12) - (pod.superelevacaoRecalquePOD10))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD12) - (pod.superelevacaoRecalquePOD2))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD12: e })}
                        value={pod.flechaMedidaPOD12} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD12) - (pod.flechaMedidaPOD9))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro13}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD13: e })}
                        value={pod.bitolaPasseioPOD13}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD13) - (pod.bitolaPasseioPOD10))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD13: e })} 
                        value={pod.superelevacaoRecalquePOD13} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD13) - (pod.superelevacaoRecalquePOD11))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD13) - (pod.superelevacaoRecalquePOD3))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD13: e })}
                        value={pod.flechaMedidaPOD13} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD13) - (pod.flechaMedidaPOD10))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro14}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD14: e })}
                        value={pod.bitolaPasseioPOD14}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD14) - (pod.bitolaPasseioPOD11))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD14: e })} 
                        value={pod.superelevacaoRecalquePOD14} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD14) - (pod.superelevacaoRecalquePOD12))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD14) - (pod.superelevacaoRecalquePOD4))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD14: e })}
                        value={pod.flechaMedidaPOD14} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD14) - (pod.flechaMedidaPOD11))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro15}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD15: e })}
                        value={pod.bitolaPasseioPOD15}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD15) - (pod.bitolaPasseioPOD12))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD15: e })} 
                        value={pod.superelevacaoRecalquePOD15} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD15) - (pod.superelevacaoRecalquePOD13))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD15) - (pod.superelevacaoRecalquePOD5))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD15: e })}
                        value={pod.flechaMedidaPOD15} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD15) - (pod.flechaMedidaPOD12))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro16}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD16: e })}
                        value={pod.bitolaPasseioPOD16}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD16) - (pod.bitolaPasseioPOD13))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD16: e })} 
                        value={pod.superelevacaoRecalquePOD16} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD16) - (pod.superelevacaoRecalquePOD14))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD16) - (pod.superelevacaoRecalquePOD6))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD16: e })}
                        value={pod.flechaMedidaPOD16} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD16) - (pod.flechaMedidaPOD13))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro17}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD17: e })}
                        value={pod.bitolaPasseioPOD17}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD17) - (pod.bitolaPasseioPOD14))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD17: e })} 
                        value={pod.superelevacaoRecalquePOD17} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD17) - (pod.superelevacaoRecalquePOD15))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD17) - (pod.superelevacaoRecalquePOD7))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD17: e })}
                        value={pod.flechaMedidaPOD17} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD17) - (pod.flechaMedidaPOD14))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro18}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD18: e })}
                        value={pod.bitolaPasseioPOD18}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD18) - (pod.bitolaPasseioPOD15))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD18: e })} 
                        value={pod.superelevacaoRecalquePOD18} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD18) - (pod.superelevacaoRecalquePOD16))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD18) - (pod.superelevacaoRecalquePOD8))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD18: e })}
                        value={pod.flechaMedidaPOD18} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD18) - (pod.flechaMedidaPOD15))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro19}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD19: e })}
                        value={pod.bitolaPasseioPOD19}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD19) - (pod.bitolaPasseioPOD16))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD19: e })} 
                        value={pod.superelevacaoRecalquePOD19} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD19) - (pod.superelevacaoRecalquePOD17))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD19) - (pod.superelevacaoRecalquePOD9))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD19: e })}
                        value={pod.flechaMedidaPOD19} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD19) - (pod.flechaMedidaPOD16))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro20}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD20: e })}
                        value={pod.bitolaPasseioPOD20}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD20) - (pod.bitolaPasseioPOD17))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD20: e })} 
                        value={pod.superelevacaoRecalquePOD20} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD20) - (pod.superelevacaoRecalquePOD18))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD20) - (pod.superelevacaoRecalquePOD10))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD20: e })}
                        value={pod.flechaMedidaPOD20} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD20) - (pod.flechaMedidaPOD17))}</Text>
                </View>
            </View>





            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro21}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD21: e })}
                        value={pod.bitolaPasseioPOD21}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD21) - (pod.bitolaPasseioPOD18))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD21: e })} 
                        value={pod.superelevacaoRecalquePOD21} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD21) - (pod.superelevacaoRecalquePOD19))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD21) - (pod.superelevacaoRecalquePOD11))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD21: e })}
                        value={pod.flechaMedidaPOD21} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD21) - (pod.flechaMedidaPOD18))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro22}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD22: e })}
                        value={pod.bitolaPasseioPOD22}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD22) - (pod.bitolaPasseioPOD19))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD22: e })} 
                        value={pod.superelevacaoRecalquePOD22} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD22) - (pod.superelevacaoRecalquePOD20))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD22) - (pod.superelevacaoRecalquePOD12))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD22: e })}
                        value={pod.flechaMedidaPOD22} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD22) - (pod.flechaMedidaPOD19))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro23}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD23: e })}
                        value={pod.bitolaPasseioPOD23}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD23) - (pod.bitolaPasseioPOD20))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD23: e })} 
                        value={pod.superelevacaoRecalquePOD23} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD23) - (pod.superelevacaoRecalquePOD21))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD23) - (pod.superelevacaoRecalquePOD13))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD23: e })}
                        value={pod.flechaMedidaPOD23} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD23) - (pod.flechaMedidaPOD20))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro24}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD24: e })}
                        value={pod.bitolaPasseioPOD24}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD24) - (pod.bitolaPasseioPOD21))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD24: e })} 
                        value={pod.superelevacaoRecalquePOD24} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD24) - (pod.superelevacaoRecalquePOD22))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD24) - (pod.superelevacaoRecalquePOD14))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD24: e })}
                        value={pod.flechaMedidaPOD24} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD24) - (pod.flechaMedidaPOD21))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro25}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD25: e })}
                        value={pod.bitolaPasseioPOD25}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD25) - (pod.bitolaPasseioPOD22))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD25: e })} 
                        value={pod.superelevacaoRecalquePOD25} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD25) - (pod.superelevacaoRecalquePOD23))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD25) - (pod.superelevacaoRecalquePOD15))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD25: e })}
                        value={pod.flechaMedidaPOD25} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD25) - (pod.flechaMedidaPOD22))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro26}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD26: e })}
                        value={pod.bitolaPasseioPOD26}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD26) - (pod.bitolaPasseioPOD23))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD26: e })} 
                        value={pod.superelevacaoRecalquePOD26} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD26) - (pod.superelevacaoRecalquePOD24))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD26) - (pod.superelevacaoRecalquePOD16))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD26: e })}
                        value={pod.flechaMedidaPOD26} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD26) - (pod.flechaMedidaPOD23))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro27}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD27: e })}
                        value={pod.bitolaPasseioPOD27}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD27) - (pod.bitolaPasseioPOD24))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD27: e })} 
                        value={pod.superelevacaoRecalquePOD27} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD27) - (pod.superelevacaoRecalquePOD25))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD27) - (pod.superelevacaoRecalquePOD17))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD27: e })}
                        value={pod.flechaMedidaPOD27} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD27) - (pod.flechaMedidaPOD24))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro28}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD28: e })}
                        value={pod.bitolaPasseioPOD28}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD28) - (pod.bitolaPasseioPOD25))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD28: e })} 
                        value={pod.superelevacaoRecalquePOD28} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD28) - (pod.superelevacaoRecalquePOD26))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD28) - (pod.superelevacaoRecalquePOD18))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD28: e })}
                        value={pod.flechaMedidaPOD28} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD28) - (pod.flechaMedidaPOD25))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro29}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD29: e })}
                        value={pod.bitolaPasseioPOD29}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD29) - (pod.bitolaPasseioPOD26))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD29: e })} 
                        value={pod.superelevacaoRecalquePOD29} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD29) - (pod.superelevacaoRecalquePOD27))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD29) - (pod.superelevacaoRecalquePOD19))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD29: e })}
                        value={pod.flechaMedidaPOD29} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD29) - (pod.flechaMedidaPOD26))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro30}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD30: e })}
                        value={pod.bitolaPasseioPOD30}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD30) - (pod.bitolaPasseioPOD27))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD30: e })} 
                        value={pod.superelevacaoRecalquePOD30} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD30) - (pod.superelevacaoRecalquePOD28))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD30) - (pod.superelevacaoRecalquePOD20))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD30: e })}
                        value={pod.flechaMedidaPOD30} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD30) - (pod.flechaMedidaPOD27))}</Text>
                </View>
            </View>





            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro31}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD31: e })}
                        value={pod.bitolaPasseioPOD31}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD31) - (pod.bitolaPasseioPOD28))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD31: e })} 
                        value={pod.superelevacaoRecalquePOD31} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD31) - (pod.superelevacaoRecalquePOD29))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD31) - (pod.superelevacaoRecalquePOD21))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD31: e })}
                        value={pod.flechaMedidaPOD31} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD31) - (pod.flechaMedidaPOD28))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro32}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD32: e })}
                        value={pod.bitolaPasseioPOD32}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD32) - (pod.bitolaPasseioPOD29))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD32: e })} 
                        value={pod.superelevacaoRecalquePOD32} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD32) - (pod.superelevacaoRecalquePOD30))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD32) - (pod.superelevacaoRecalquePOD22))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD32: e })}
                        value={pod.flechaMedidaPOD32} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD32) - (pod.flechaMedidaPOD29))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro33}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD33: e })}
                        value={pod.bitolaPasseioPOD33}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD33) - (pod.bitolaPasseioPOD30))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD33: e })} 
                        value={pod.superelevacaoRecalquePOD33} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD33) - (pod.superelevacaoRecalquePOD31))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD33) - (pod.superelevacaoRecalquePOD23))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD33: e })}
                        value={pod.flechaMedidaPOD33} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD33) - (pod.flechaMedidaPOD30))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro34}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD34: e })}
                        value={pod.bitolaPasseioPOD34}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD34) - (pod.bitolaPasseioPOD31))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD34: e })} 
                        value={pod.superelevacaoRecalquePOD34} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD34) - (pod.superelevacaoRecalquePOD32))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD34) - (pod.superelevacaoRecalquePOD24))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD34: e })}
                        value={pod.flechaMedidaPOD34} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD34) - (pod.flechaMedidaPOD31))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro35}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD35: e })}
                        value={pod.bitolaPasseioPOD35}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD35) - (pod.bitolaPasseioPOD32))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD35: e })} 
                        value={pod.superelevacaoRecalquePOD35} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD35) - (pod.superelevacaoRecalquePOD33))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD35) - (pod.superelevacaoRecalquePOD25))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD35: e })}
                        value={pod.flechaMedidaPOD35} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD35) - (pod.flechaMedidaPOD32))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro36}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD36: e })}
                        value={pod.bitolaPasseioPOD36}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD36) - (pod.bitolaPasseioPOD33))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD36: e })} 
                        value={pod.superelevacaoRecalquePOD36} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD36) - (pod.superelevacaoRecalquePOD34))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD36) - (pod.superelevacaoRecalquePOD26))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD36: e })}
                        value={pod.flechaMedidaPOD36} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD36) - (pod.flechaMedidaPOD33))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro37}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD37: e })}
                        value={pod.bitolaPasseioPOD37}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD37) - (pod.bitolaPasseioPOD34))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD37: e })} 
                        value={pod.superelevacaoRecalquePOD37} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD37) - (pod.superelevacaoRecalquePOD35))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD37) - (pod.superelevacaoRecalquePOD27))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD37: e })}
                        value={pod.flechaMedidaPOD37} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD37) - (pod.flechaMedidaPOD34))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro38}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD38: e })}
                        value={pod.bitolaPasseioPOD38}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD38) - (pod.bitolaPasseioPOD35))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD38: e })} 
                        value={pod.superelevacaoRecalquePOD38} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD38) - (pod.superelevacaoRecalquePOD36))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD38) - (pod.superelevacaoRecalquePOD28))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD38: e })}
                        value={pod.flechaMedidaPOD38} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD38) - (pod.flechaMedidaPOD35))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro39}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD39: e })}
                        value={pod.bitolaPasseioPOD39}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD39) - (pod.bitolaPasseioPOD36))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD39: e })} 
                        value={pod.superelevacaoRecalquePOD39} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD39) - (pod.superelevacaoRecalquePOD37))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD39) - (pod.superelevacaoRecalquePOD29))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD39: e })}
                        value={pod.flechaMedidaPOD39} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD39) - (pod.flechaMedidaPOD36))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro40}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD40: e })}
                        value={pod.bitolaPasseioPOD40}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD40) - (pod.bitolaPasseioPOD37))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD40: e })} 
                        value={pod.superelevacaoRecalquePOD40} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD40) - (pod.superelevacaoRecalquePOD38))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD40) - (pod.superelevacaoRecalquePOD30))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD40: e })}
                        value={pod.flechaMedidaPOD40} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD40) - (pod.flechaMedidaPOD37))}</Text>
                </View>
            </View>






            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro41}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD41: e })}
                        value={pod.bitolaPasseioPOD41}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD41) - (pod.bitolaPasseioPOD38))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD41: e })} 
                        value={pod.superelevacaoRecalquePOD41} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD41) - (pod.superelevacaoRecalquePOD39))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD41) - (pod.superelevacaoRecalquePOD31))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD41: e })}
                        value={pod.flechaMedidaPOD41} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD41) - (pod.flechaMedidaPOD38))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro42}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD42: e })}
                        value={pod.bitolaPasseioPOD42}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD42) - (pod.bitolaPasseioPOD39))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD42: e })} 
                        value={pod.superelevacaoRecalquePOD42} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD42) - (pod.superelevacaoRecalquePOD40))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD42) - (pod.superelevacaoRecalquePOD32))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD42: e })}
                        value={pod.flechaMedidaPOD42} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD42) - (pod.flechaMedidaPOD39))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro43}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD43: e })}
                        value={pod.bitolaPasseioPOD43}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD43) - (pod.bitolaPasseioPOD40))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD43: e })} 
                        value={pod.superelevacaoRecalquePOD43} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD43) - (pod.superelevacaoRecalquePOD41))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD43) - (pod.superelevacaoRecalquePOD33))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD43: e })}
                        value={pod.flechaMedidaPOD43} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD43) - (pod.flechaMedidaPOD40))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro44}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD44: e })}
                        value={pod.bitolaPasseioPOD44}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD44) - (pod.bitolaPasseioPOD41))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD44: e })} 
                        value={pod.superelevacaoRecalquePOD44} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD44) - (pod.superelevacaoRecalquePOD42))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD44) - (pod.superelevacaoRecalquePOD34))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD44: e })}
                        value={pod.flechaMedidaPOD44} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD44) - (pod.flechaMedidaPOD41))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro45}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD45: e })}
                        value={pod.bitolaPasseioPOD45}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD45) - (pod.bitolaPasseioPOD42))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD45: e })} 
                        value={pod.superelevacaoRecalquePOD45} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD45) - (pod.superelevacaoRecalquePOD43))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD45) - (pod.superelevacaoRecalquePOD35))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD45: e })}
                        value={pod.flechaMedidaPOD45} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD45) - (pod.flechaMedidaPOD42))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro46}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD46: e })}
                        value={pod.bitolaPasseioPOD46}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD46) - (pod.bitolaPasseioPOD43))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD46: e })} 
                        value={pod.superelevacaoRecalquePOD46} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD46) - (pod.superelevacaoRecalquePOD44))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD46) - (pod.superelevacaoRecalquePOD36))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD46: e })}
                        value={pod.flechaMedidaPOD46} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD46) - (pod.flechaMedidaPOD43))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro47}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD47: e })}
                        value={pod.bitolaPasseioPOD47}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD47) - (pod.bitolaPasseioPOD44))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD47: e })} 
                        value={pod.superelevacaoRecalquePOD47} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD47) - (pod.superelevacaoRecalquePOD45))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD47) - (pod.superelevacaoRecalquePOD37))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD47: e })}
                        value={pod.flechaMedidaPOD47} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD47) - (pod.flechaMedidaPOD44))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro48}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD48: e })}
                        value={pod.bitolaPasseioPOD48}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD48) - (pod.bitolaPasseioPOD45))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD48: e })} 
                        value={pod.superelevacaoRecalquePOD48} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD48) - (pod.superelevacaoRecalquePOD46))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD48) - (pod.superelevacaoRecalquePOD38))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD48: e })}
                        value={pod.flechaMedidaPOD48} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD49) - (pod.flechaMedidaPOD46))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro49}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD49: e })}
                        value={pod.bitolaPasseioPOD49}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD49) - (pod.bitolaPasseioPOD46))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD49: e })} 
                        value={pod.superelevacaoRecalquePOD49} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD49) - (pod.superelevacaoRecalquePOD47))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD49) - (pod.superelevacaoRecalquePOD39))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD49: e })}
                        value={pod.flechaMedidaPOD49} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD49) - (pod.flechaMedidaPOD46))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro50}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD50: e })}
                        value={pod.bitolaPasseioPOD50}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD50) - (pod.bitolaPasseioPOD47))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD50: e })} 
                        value={pod.superelevacaoRecalquePOD50} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD50) - (pod.superelevacaoRecalquePOD48))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD50) - (pod.superelevacaoRecalquePOD40))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD50: e })}
                        value={pod.flechaMedidaPOD50} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD50) - (pod.flechaMedidaPOD47))}</Text>
                </View>
            </View>






            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro51}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD51: e })}
                        value={pod.bitolaPasseioPOD51}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD51) - (pod.bitolaPasseioPOD48))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD51: e })} 
                        value={pod.superelevacaoRecalquePOD51} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD51) - (pod.superelevacaoRecalquePOD49))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD51) - (pod.superelevacaoRecalquePOD41))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD51: e })}
                        value={pod.flechaMedidaPOD51} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD51) - (pod.flechaMedidaPOD48))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro52}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD52: e })}
                        value={pod.bitolaPasseioPOD52}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD52) - (pod.bitolaPasseioPOD49))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD52: e })} 
                        value={pod.superelevacaoRecalquePOD52} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD52) - (pod.superelevacaoRecalquePOD50))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD52) - (pod.superelevacaoRecalquePOD42))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD52: e })}
                        value={pod.flechaMedidaPOD52} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD52) - (pod.flechaMedidaPOD49))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro53}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD53: e })}
                        value={pod.bitolaPasseioPOD53}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD53) - (pod.bitolaPasseioPOD50))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD53: e })} 
                        value={pod.superelevacaoRecalquePOD53} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD53) - (pod.superelevacaoRecalquePOD51))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD53) - (pod.superelevacaoRecalquePOD43))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD53: e })}
                        value={pod.flechaMedidaPOD53} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD53) - (pod.flechaMedidaPOD50))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro54}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD54: e })}
                        value={pod.bitolaPasseioPOD54}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD54) - (pod.bitolaPasseioPOD51))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD54: e })} 
                        value={pod.superelevacaoRecalquePOD54} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD54) - (pod.superelevacaoRecalquePOD52))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD54) - (pod.superelevacaoRecalquePOD44))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD54: e })}
                        value={pod.flechaMedidaPOD54} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD54) - (pod.flechaMedidaPOD51))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro55}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD55: e })}
                        value={pod.bitolaPasseioPOD55}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD55) - (pod.bitolaPasseioPOD52))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD55: e })} 
                        value={pod.superelevacaoRecalquePOD55} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD55) - (pod.superelevacaoRecalquePOD53))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD55) - (pod.superelevacaoRecalquePOD45))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD55: e })}
                        value={pod.flechaMedidaPOD55} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD55) - (pod.flechaMedidaPOD52))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro56}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD56: e })}
                        value={pod.bitolaPasseioPOD56}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD56) - (pod.bitolaPasseioPOD53))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD56: e })} 
                        value={pod.superelevacaoRecalquePOD56} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD56) - (pod.superelevacaoRecalquePOD54))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD56) - (pod.superelevacaoRecalquePOD46))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD56: e })}
                        value={pod.flechaMedidaPOD56} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD56) - (pod.flechaMedidaPOD53))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro57}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD57: e })}
                        value={pod.bitolaPasseioPOD57}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD57) - (pod.bitolaPasseioPOD54))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD57: e })} 
                        value={pod.superelevacaoRecalquePOD57} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD57) - (pod.superelevacaoRecalquePOD55))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD57) - (pod.superelevacaoRecalquePOD47))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD57: e })}
                        value={pod.flechaMedidaPOD57} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD57) - (pod.flechaMedidaPOD54))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro58}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD58: e })}
                        value={pod.bitolaPasseioPOD58}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD58) - (pod.bitolaPasseioPOD55))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD58: e })} 
                        value={pod.superelevacaoRecalquePOD58} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD58) - (pod.superelevacaoRecalquePOD56))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD58) - (pod.superelevacaoRecalquePOD48))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD58: e })}
                        value={pod.flechaMedidaPOD58} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD58) - (pod.flechaMedidaPOD55))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro59}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD59: e })}
                        value={pod.bitolaPasseioPOD59}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD59) - (pod.bitolaPasseioPOD56))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD59: e })} 
                        value={pod.superelevacaoRecalquePOD59} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD59) - (pod.superelevacaoRecalquePOD57))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD59) - (pod.superelevacaoRecalquePOD49))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD59: e })}
                        value={pod.flechaMedidaPOD59} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD59) - (pod.flechaMedidaPOD56))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro60}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD60: e })}
                        value={pod.bitolaPasseioPOD60}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD60) - (pod.bitolaPasseioPOD57))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD60: e })} 
                        value={pod.superelevacaoRecalquePOD60} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD60) - (pod.superelevacaoRecalquePOD58))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD60) - (pod.superelevacaoRecalquePOD50))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD60: e })}
                        value={pod.flechaMedidaPOD60} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD60) - (pod.flechaMedidaPOD57))}</Text>
                </View>
            </View>







            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro61}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD61: e })}
                        value={pod.bitolaPasseioPOD61}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD61) - (pod.bitolaPasseioPOD58))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD61: e })} 
                        value={pod.superelevacaoRecalquePOD61} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD61) - (pod.superelevacaoRecalquePOD59))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD61) - (pod.superelevacaoRecalquePOD51))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD61: e })}
                        value={pod.flechaMedidaPOD61} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD61) - (pod.flechaMedidaPOD58))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro62}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD62: e })}
                        value={pod.bitolaPasseioPOD62}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD62) - (pod.bitolaPasseioPOD59))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD62: e })} 
                        value={pod.superelevacaoRecalquePOD62} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD62) - (pod.superelevacaoRecalquePOD60))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD62) - (pod.superelevacaoRecalquePOD52))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD62: e })}
                        value={pod.flechaMedidaPOD62} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD62) - (pod.flechaMedidaPOD59))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro63}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD63: e })}
                        value={pod.bitolaPasseioPOD63}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD63) - (pod.bitolaPasseioPOD60))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD63: e })} 
                        value={pod.superelevacaoRecalquePOD63} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD63) - (pod.superelevacaoRecalquePOD61))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD63) - (pod.superelevacaoRecalquePOD53))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD63: e })}
                        value={pod.flechaMedidaPOD63} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD63) - (pod.flechaMedidaPOD60))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro64}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD64: e })}
                        value={pod.bitolaPasseioPOD64}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD64) - (pod.bitolaPasseioPOD61))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD64: e })} 
                        value={pod.superelevacaoRecalquePOD64} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD64) - (pod.superelevacaoRecalquePOD62))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD64) - (pod.superelevacaoRecalquePOD54))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD64: e })}
                        value={pod.flechaMedidaPOD64} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD64) - (pod.flechaMedidaPOD61))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro65}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD65: e })}
                        value={pod.bitolaPasseioPOD65}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD65) - (pod.bitolaPasseioPOD62))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD65: e })} 
                        value={pod.superelevacaoRecalquePOD65} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD65) - (pod.superelevacaoRecalquePOD63))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD65) - (pod.superelevacaoRecalquePOD55))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD65: e })}
                        value={pod.flechaMedidaPOD65} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD65) - (pod.flechaMedidaPOD62))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro66}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD66: e })}
                        value={pod.bitolaPasseioPOD66}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD66) - (pod.bitolaPasseioPOD63))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD66: e })} 
                        value={pod.superelevacaoRecalquePOD66} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD66) - (pod.superelevacaoRecalquePOD64))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD66) - (pod.superelevacaoRecalquePOD56))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD66: e })}
                        value={pod.flechaMedidaPOD66} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD66) - (pod.flechaMedidaPOD63))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro67}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD67: e })}
                        value={pod.bitolaPasseioPOD67}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD67) - (pod.bitolaPasseioPOD64))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD67: e })} 
                        value={pod.superelevacaoRecalquePOD67} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD67) - (pod.superelevacaoRecalquePOD65))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD67) - (pod.superelevacaoRecalquePOD57))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD67: e })}
                        value={pod.flechaMedidaPOD67} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD67) - (pod.flechaMedidaPOD64))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro68}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD68: e })}
                        value={pod.bitolaPasseioPOD68}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD68) - (pod.bitolaPasseioPOD65))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD68: e })} 
                        value={pod.superelevacaoRecalquePOD68} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD68) - (pod.superelevacaoRecalquePOD66))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD68) - (pod.superelevacaoRecalquePOD58))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD68: e })}
                        value={pod.flechaMedidaPOD68} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD68) - (pod.flechaMedidaPOD65))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro69}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD69: e })}
                        value={pod.bitolaPasseioPOD69}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD69) - (pod.bitolaPasseioPOD66))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD69: e })} 
                        value={pod.superelevacaoRecalquePOD69} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD69) - (pod.superelevacaoRecalquePOD67))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD69) - (pod.superelevacaoRecalquePOD59))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD69: e })}
                        value={pod.flechaMedidaPOD69} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD69) - (pod.flechaMedidaPOD66))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro70}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD70: e })}
                        value={pod.bitolaPasseioPOD70}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD70) - (pod.bitolaPasseioPOD67))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD70: e })} 
                        value={pod.superelevacaoRecalquePOD70} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD70) - (pod.superelevacaoRecalquePOD68))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD70) - (pod.superelevacaoRecalquePOD60))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD70: e })}
                        value={pod.flechaMedidaPOD70} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD70) - (pod.flechaMedidaPOD67))}</Text>
                </View>
            </View>







            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro71}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD71: e })}
                        value={pod.bitolaPasseioPOD71}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD71) - (pod.bitolaPasseioPOD68))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD71: e })} 
                        value={pod.superelevacaoRecalquePOD71} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD71) - (pod.superelevacaoRecalquePOD69))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD71) - (pod.superelevacaoRecalquePOD61))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD71: e })}
                        value={pod.flechaMedidaPOD71} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD71) - (pod.flechaMedidaPOD68))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro72}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD72: e })}
                        value={pod.bitolaPasseioPOD72}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD72) - (pod.bitolaPasseioPOD69))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD72: e })} 
                        value={pod.superelevacaoRecalquePOD72} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD72) - (pod.superelevacaoRecalquePOD70))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD72) - (pod.superelevacaoRecalquePOD62))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD72: e })}
                        value={pod.flechaMedidaPOD72} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD72) - (pod.flechaMedidaPOD69))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro73}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD73: e })}
                        value={pod.bitolaPasseioPOD73}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD73) - (pod.bitolaPasseioPOD70))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD73: e })} 
                        value={pod.superelevacaoRecalquePOD73} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD73) - (pod.superelevacaoRecalquePOD71))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD73) - (pod.superelevacaoRecalquePOD63))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD73: e })}
                        value={pod.flechaMedidaPOD73} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD73) - (pod.flechaMedidaPOD70))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro74}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD74: e })}
                        value={pod.bitolaPasseioPOD74}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD74) - (pod.bitolaPasseioPOD71))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD74: e })} 
                        value={pod.superelevacaoRecalquePOD74} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD74) - (pod.superelevacaoRecalquePOD72))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD74) - (pod.superelevacaoRecalquePOD64))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD74: e })}
                        value={pod.flechaMedidaPOD74} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD74) - (pod.flechaMedidaPOD71))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro75}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD75: e })}
                        value={pod.bitolaPasseioPOD75}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD75) - (pod.bitolaPasseioPOD72))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD75: e })} 
                        value={pod.superelevacaoRecalquePOD75} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD75) - (pod.superelevacaoRecalquePOD73))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD75) - (pod.superelevacaoRecalquePOD65))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD75: e })}
                        value={pod.flechaMedidaPOD75} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD75) - (pod.flechaMedidaPOD72))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro76}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD76: e })}
                        value={pod.bitolaPasseioPOD76}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD76) - (pod.bitolaPasseioPOD73))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD76: e })} 
                        value={pod.superelevacaoRecalquePOD76} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD76) - (pod.superelevacaoRecalquePOD74))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD76) - (pod.superelevacaoRecalquePOD66))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD76: e })}
                        value={pod.flechaMedidaPOD76} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD76) - (pod.flechaMedidaPOD73))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro77}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD77: e })}
                        value={pod.bitolaPasseioPOD77}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD77) - (pod.bitolaPasseioPOD74))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD77: e })} 
                        value={pod.superelevacaoRecalquePOD77} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD77) - (pod.superelevacaoRecalquePOD75))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD77) - (pod.superelevacaoRecalquePOD67))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD77: e })}
                        value={pod.flechaMedidaPOD77} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD77) - (pod.flechaMedidaPOD74))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro78}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD78: e })}
                        value={pod.bitolaPasseioPOD78}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD78) - (pod.bitolaPasseioPOD75))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD78: e })} 
                        value={pod.superelevacaoRecalquePOD78} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD78) - (pod.superelevacaoRecalquePOD76))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD78) - (pod.superelevacaoRecalquePOD68))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD78: e })}
                        value={pod.flechaMedidaPOD78} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD78) - (pod.flechaMedidaPOD75))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro79}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD79: e })}
                        value={pod.bitolaPasseioPOD79}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD79) - (pod.bitolaPasseioPOD76))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD79: e })} 
                        value={pod.superelevacaoRecalquePOD79} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD79) - (pod.superelevacaoRecalquePOD77))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD79) - (pod.superelevacaoRecalquePOD69))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD79: e })}
                        value={pod.flechaMedidaPOD79} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD79) - (pod.flechaMedidaPOD76))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro80}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD80: e })}
                        value={pod.bitolaPasseioPOD80}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD80) - (pod.bitolaPasseioPOD77))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD80: e })} 
                        value={pod.superelevacaoRecalquePOD80} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD80) - (pod.superelevacaoRecalquePOD78))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD80) - (pod.superelevacaoRecalquePOD70))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD80: e })}
                        value={pod.flechaMedidaPOD80} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD80) - (pod.flechaMedidaPOD77))}</Text>
                </View>
            </View>







            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro81}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD81: e })}
                        value={pod.bitolaPasseioPOD81}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD81) - (pod.bitolaPasseioPOD78))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD81: e })} 
                        value={pod.superelevacaoRecalquePOD81} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD81) - (pod.superelevacaoRecalquePOD79))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD81) - (pod.superelevacaoRecalquePOD71))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD81: e })}
                        value={pod.flechaMedidaPOD81} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD81) - (pod.flechaMedidaPOD78))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro82}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD82: e })}
                        value={pod.bitolaPasseioPOD82}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD82) - (pod.bitolaPasseioPOD79))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD82: e })} 
                        value={pod.superelevacaoRecalquePOD82} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD82) - (pod.superelevacaoRecalquePOD80))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD82) - (pod.superelevacaoRecalquePOD72))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD82: e })}
                        value={pod.flechaMedidaPOD82} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD82) - (pod.flechaMedidaPOD79))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro83}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD83: e })}
                        value={pod.bitolaPasseioPOD83}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD83) - (pod.bitolaPasseioPOD80))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD83: e })} 
                        value={pod.superelevacaoRecalquePOD83} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD83) - (pod.superelevacaoRecalquePOD81))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD83) - (pod.superelevacaoRecalquePOD73))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD83: e })}
                        value={pod.flechaMedidaPOD83} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD83) - (pod.flechaMedidaPOD80))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro84}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD84: e })}
                        value={pod.bitolaPasseioPOD84}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD84) - (pod.bitolaPasseioPOD81))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD84: e })} 
                        value={pod.superelevacaoRecalquePOD84} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD84) - (pod.superelevacaoRecalquePOD82))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD84) - (pod.superelevacaoRecalquePOD74))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD84: e })}
                        value={pod.flechaMedidaPOD84} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD84) - (pod.flechaMedidaPOD81))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro85}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD85: e })}
                        value={pod.bitolaPasseioPOD85}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD85) - (pod.bitolaPasseioPOD82))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD85: e })} 
                        value={pod.superelevacaoRecalquePOD85} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD85) - (pod.superelevacaoRecalquePOD83))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD85) - (pod.superelevacaoRecalquePOD75))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD85: e })}
                        value={pod.flechaMedidaPOD85} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD85) - (pod.flechaMedidaPOD82))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro86}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD86: e })}
                        value={pod.bitolaPasseioPOD86}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD86) - (pod.bitolaPasseioPOD83))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD86: e })} 
                        value={pod.superelevacaoRecalquePOD86} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD86) - (pod.superelevacaoRecalquePOD84))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD86) - (pod.superelevacaoRecalquePOD76))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD86: e })}
                        value={pod.flechaMedidaPOD86} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD86) - (pod.flechaMedidaPOD83))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro87}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD87: e })}
                        value={pod.bitolaPasseioPOD87}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD87) - (pod.bitolaPasseioPOD84))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD87: e })} 
                        value={pod.superelevacaoRecalquePOD87} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD87) - (pod.superelevacaoRecalquePOD85))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD87) - (pod.superelevacaoRecalquePOD77))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD87: e })}
                        value={pod.flechaMedidaPOD87} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD87) - (pod.flechaMedidaPOD84))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro88}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD88: e })}
                        value={pod.bitolaPasseioPOD88}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD88) - (pod.bitolaPasseioPOD85))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD88: e })} 
                        value={pod.superelevacaoRecalquePOD88} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD88) - (pod.superelevacaoRecalquePOD86))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD88) - (pod.superelevacaoRecalquePOD78))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD88: e })}
                        value={pod.flechaMedidaPOD88} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD88) - (pod.flechaMedidaPOD85))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro89}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD89: e })}
                        value={pod.bitolaPasseioPOD89}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD89) - (pod.bitolaPasseioPOD86))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD89: e })} 
                        value={pod.superelevacaoRecalquePOD89} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD89) - (pod.superelevacaoRecalquePOD87))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD89) - (pod.superelevacaoRecalquePOD79))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD89: e })}
                        value={pod.flechaMedidaPOD89} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD89) - (pod.flechaMedidaPOD86))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro90}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD90: e })}
                        value={pod.bitolaPasseioPOD90}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD90) - (pod.bitolaPasseioPOD87))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD90: e })} 
                        value={pod.superelevacaoRecalquePOD90} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD90) - (pod.superelevacaoRecalquePOD88))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD90) - (pod.superelevacaoRecalquePOD80))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD90: e })}
                        value={pod.flechaMedidaPOD90} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD90) - (pod.flechaMedidaPOD87))}</Text>
                </View>
            </View>






            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro91}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD91: e })}
                        value={pod.bitolaPasseioPOD91}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD91) - (pod.bitolaPasseioPOD88))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD91: e })} 
                        value={pod.superelevacaoRecalquePOD91} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD91) - (pod.superelevacaoRecalquePOD89))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD91) - (pod.superelevacaoRecalquePOD81))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD91: e })}
                        value={pod.flechaMedidaPOD91} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD91) - (pod.flechaMedidaPOD88))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro92}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD92: e })}
                        value={pod.bitolaPasseioPOD92}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD92) - (pod.bitolaPasseioPOD89))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD92: e })} 
                        value={pod.superelevacaoRecalquePOD92} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD92) - (pod.superelevacaoRecalquePOD90))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD92) - (pod.superelevacaoRecalquePOD82))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD92: e })}
                        value={pod.flechaMedidaPOD92} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD92) - (pod.flechaMedidaPOD89))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro93}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD93: e })}
                        value={pod.bitolaPasseioPOD93}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD93) - (pod.bitolaPasseioPOD90))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD93: e })} 
                        value={pod.superelevacaoRecalquePOD93} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD93) - (pod.superelevacaoRecalquePOD91))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD93) - (pod.superelevacaoRecalquePOD83))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD93: e })}
                        value={pod.flechaMedidaPOD93} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD93) - (pod.flechaMedidaPOD90))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro94}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD94: e })}
                        value={pod.bitolaPasseioPOD94}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD94) - (pod.bitolaPasseioPOD91))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD94: e })} 
                        value={pod.superelevacaoRecalquePOD94} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD94) - (pod.superelevacaoRecalquePOD92))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD94) - (pod.superelevacaoRecalquePOD84))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD94: e })}
                        value={pod.flechaMedidaPOD94} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD94) - (pod.flechaMedidaPOD91))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro95}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD95: e })}
                        value={pod.bitolaPasseioPOD95}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD95) - (pod.bitolaPasseioPOD92))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD95: e })} 
                        value={pod.superelevacaoRecalquePOD95} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD95) - (pod.superelevacaoRecalquePOD93))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD95) - (pod.superelevacaoRecalquePOD85))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD95: e })}
                        value={pod.flechaMedidaPOD95} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD95) - (pod.flechaMedidaPOD92))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro96}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD96: e })}
                        value={pod.bitolaPasseioPOD96}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD96) - (pod.bitolaPasseioPOD93))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD96: e })} 
                        value={pod.superelevacaoRecalquePOD96} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD96) - (pod.superelevacaoRecalquePOD94))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD96) - (pod.superelevacaoRecalquePOD86))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD96: e })}
                        value={pod.flechaMedidaPOD96} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD96) - (pod.flechaMedidaPOD93))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro97}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD97: e })}
                        value={pod.bitolaPasseioPOD97}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD97) - (pod.bitolaPasseioPOD94))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD97: e })} 
                        value={pod.superelevacaoRecalquePOD97} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD97) - (pod.superelevacaoRecalquePOD95))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD97) - (pod.superelevacaoRecalquePOD87))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD97: e })}
                        value={pod.flechaMedidaPOD97} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD97) - (pod.flechaMedidaPOD94))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro98}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD98: e })}
                        value={pod.bitolaPasseioPOD98}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD98) - (pod.bitolaPasseioPOD95))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD98: e })} 
                        value={pod.superelevacaoRecalquePOD98} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD98) - (pod.superelevacaoRecalquePOD96))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD98) - (pod.superelevacaoRecalquePOD88))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD98: e })}
                        value={pod.flechaMedidaPOD98} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD98) - (pod.flechaMedidaPOD95))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro99}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD99: e })}
                        value={pod.bitolaPasseioPOD99}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD99) - (pod.bitolaPasseioPOD96))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD99: e })} 
                        value={pod.superelevacaoRecalquePOD99} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD99) - (pod.superelevacaoRecalquePOD97))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD99) - (pod.superelevacaoRecalquePOD89))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD99: e })}
                        value={pod.flechaMedidaPOD99} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD99) - (pod.flechaMedidaPOD96))}</Text>
                </View>
            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{pod.estacaCadaMetro100}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD100: e })}
                        value={pod.bitolaPasseioPOD100}
                        multiline={false}
                        style={styles.tablePODIntputEditable}

                    />
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.bitolaPasseioPOD100) - (pod.bitolaPasseioPOD97))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD100: e })} 
                        value={pod.superelevacaoRecalquePOD100} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>            
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD100) - (pod.superelevacaoRecalquePOD98))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.superelevacaoRecalquePOD100) - (pod.superelevacaoRecalquePOD90))}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD100: e })}
                        value={pod.flechaMedidaPOD100} 
                        multiline={false} 
                        style={styles.tablePODIntputEditable}

                    />
                </View>							
                <View style={styles.tablePODMedicoesRow5}>		
                    <Text style={styles.tablePODCol1}>{Math.abs((pod.flechaMedidaPOD100) - (pod.flechaMedidaPOD97))}</Text>
                </View>
            </View>



        </View>
        

        

        

    )
    
}