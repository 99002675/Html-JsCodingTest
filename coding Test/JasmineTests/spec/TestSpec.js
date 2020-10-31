describe('Suite  to test Customer',()=> {
    let emp=null;
    


    it('should set Nmae',()=>{
       const emp = new Customer("Afrid","af@afridshariff@gmail.com")
       const b=emp.validateName(emp);
        expect(true).toBe(b)
    })
    it('should set email',()=>{
        const emp = new Customer("Afrid","fridshariff@gmail.com")
        const e=emp.validateEmail(emp);
         expect(true).toBe(e)
     })


     it('should set Phone',()=>{
        const emp = new Customer("Afrid","afridshariff@gmail.com","9945309755",500)
        const p=emp.validatePhone(emp);
         expect(true).toBe(p)
     })

     it('should set BillAmount',()=>{
        const emp = new Customer("Afrid","afridshariff@gmail.com","9945309755",600)
        const a=emp.validateBillAmt(emp);
         expect(true).toBe(a)
     })
     
    
})








