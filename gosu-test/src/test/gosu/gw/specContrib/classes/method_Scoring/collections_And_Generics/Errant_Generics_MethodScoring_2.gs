package gw.specContrib.classes.method_Scoring.collections_And_Generics

uses java.lang.*

class Errant_Generics_MethodScoring_2 {
  class A{}
  class B{}

  function foo(p: List<Integer>, i: int) : A {return null}
  function foo(p: List<Long>, l: long) : B {return null}

  function caller() {

    var a1111 : A =  foo({1,2,3}, 42)
    var a1112 : A =  foo({100L,200L}, 100L)      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A'
    var a1113 : A =  foo({1,2,3}, 100L)      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A'
    var a1114 : A =  foo({100L,200L}, 42)      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A'
    var a1115 : A =  foo({1,2,3}, new Integer(42))
    var a1116 : A =  foo({100L,200L}, new Long(100))      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A'
    var a1117 : A =  foo({1,2,3}, new Long(100))      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A'
    var a1118 : A =  foo({100L,200L}, new Integer(42))      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A'

    var b1111 : B =  foo({1,2,3}, 42)      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B'
    var b1112 : B =  foo({100L,200L}, 100L)
    //IDE-1525
    var b1113 : B =  foo({1,2,3}, 100L)
    var b1114 : B =  foo({100L,200L}, 42)
    var b1115 : B =  foo({1,2,3}, new Integer(42))      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.A', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.METHODSCORINGOVERLOADING.GENERICS_METHODSCORING.GENERICS_METHODSCORING_2.B'
    var b1116 : B =  foo({100L,200L}, new Long(100))
    var b1117 : B =  foo({1,2,3}, new Long(42))
    var b1118 : B =  foo({100L,200L}, new Integer(42))

    var c1111 =  foo({1,2,3}, 42)
    var c1112 =  foo({100L,200L}, 100L)
    //IDE-1525
    var c1113 =  foo({1,2,3}, 100L)
    var c1114 =  foo({100L,200L}, 42)
    var c1115 =  foo({1,2,3}, new Integer(42))
    var c1116 =  foo({100L,200L}, new Long(100))
    var c1117 =  foo({1,2,3}, new Long(42))
    var c1118 =  foo({100L,200L}, new Integer(42))
   }
}