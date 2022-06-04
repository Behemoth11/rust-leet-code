class Matrix {
    constructor(row, column){
        this.row = row;
        this.column = column;
        this.array = Array(row * column ).fill(1);
    };
    
    set( row, column , value ){
        this.array[ row * this.column + column ] = value;
    }
    
    get( row, column , value ){
        return this.array[ row * this.column + column ]
    }
    
   addQueen(row, column){
        for ( let i = row +1 ; i < this.row ; i ++ ){
            this.set( i, column, 0 );
        }
        
        for ( let i = 0; i < this.column ; i ++ ){
            this.set ( row, i, 0);
        }
        

        for ( let i  = 0; i + row < this.row && i + column < this.column ; i ++){
            this.set( i + row , i + column  , 0 )
        }
      
        for ( let i  = 0 ; i + row < this.row && - i + column >= 0 ; i ++){
            this.set( i + row , - i + column  , 0 )
        }
      
        this.set( row, column , 1 )
    }
    
    copy(){
        let matrix = new Matrix(0,0);
        
        matrix.row = this.row;
        matrix.column = this.column;
        
        matrix.array = [...this.array]; 
        
        return matrix;
    }
    
    print(){
        let log = "";
        for ( let i = 0; i < this.row ; i ++ ){
            log +=  this.array.slice ( i * this.column , (i + 1) * this.column ).join("  ") + "\n"
        }
    }
    
    toResultFormat(){
        let result = [];
        
        for ( let i = 0; i < this.row ; i ++ ){
            let temp = "";
            for ( let column = 0; column < this.column ; column++  ){
                temp += this.get(i, column) === 0 ? "." : "Q";
            }
            result.push ( temp ) 
        }
        
        
        return result;
    }
}
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    let matrix = new Matrix(n,n);
    
    let result = [];
    let temp_matrix ;
    
    matrix.print()
    
    const main = ( matrix, row ) => {
        let nexts = [];
        
        for ( let column = 0; column < n ; column ++ ){
            if ( matrix.get( row, column ) === 0 ) continue;
                
                if ( row === n - 1 ){
                    matrix.addQueen(row, column);
                    return result.push( matrix.toResultFormat() );
                }else {
                    temp_matrix = matrix.copy();      
            
                    temp_matrix.addQueen(row, column);  

                    main( temp_matrix , row + 1);
                }  
        };
    }
    
    main(matrix, 0);
    
    return result;
};