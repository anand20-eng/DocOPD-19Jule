
export const onCapsOpen = () => {
    setCapsOpen(true);
};

export const onMedicineOpen = () => {
    setMedicineOpen(true);
};
export const onUnitOpen = () => {
    setUnitOpen(true);
};
export const onDoseTimeOpen = () => {
    return setDoseTimeOpen(true);
};
export const onAfterBeforeOpen = () => {
    return setAfterBeforeTime(true);
};


export const  capsData = [
    { label: "Abc", value: "Abc" },
    { label: "Bba", value: "Bac" },
    { label: "Ddd", value: "Ddd" },
    { label: "Eee", value: "Eee" },
    { label: "Fff", value: "Fff" },
    { label: "Ggg", value: "Ggg" },
]

export const  medicineData = [
    { label: "yyy", value: "yyy" },
    { label: "kkk", value: "kkk" },
    { label: "uuu", value: "uuu" },
    { label: "iii", value: "iii" },
    { label: "lll", value: "lll" },
    { label: "ppp", value: "ppp" },
]

export const  unitData = [
    { label: "100mg", value: "100mg" },
    { label: "200mg", value: "200mg" },
    { label: "300mg", value: "300mg" },
    { label: "400mg", value: "400mg" },
    { label: "500mg", value: "500mg" },
    { label: "600mg", value: "600mg" },
]
export const  doseTimeData = [
    { label: "1-1", value: "1-1" },
    { label: "0-0-0", value: "0-0-0" },
    { label: "0-0", value: "0-0" },
    { label: "1-1-1", value: "1-1-1" },
    { label: "1", value: "1" },
    { label: "0", value: "0" },
]

export const  afterBeforeData = [
    { label: "after/before", value: "after/before" },
    { label: "BeforeMeal", value: "BeforeMeal" },
    { label: "AfterMeal", value: "AfterMeal" },
   
]

