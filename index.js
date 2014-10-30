module.exports = trace;

function trace(){
	Error.prepareStackTrace = function(_, stack){ return stack; };
	var err = new Error;
	Error.captureStackTrace(err, arguments.callee);
	var stack = err.stack;
	console.log('  \033[32mFunction Name \033[34m location \033[31m [row,column]');
	console.log('---------------------------------------------------------------');
  	stack.forEach(function(position){
  		console.log('  \033[32m%s\033[34m in %s:\033[31m [%d,%d]\033[0m'
  			,position.getFunctionName() || 'Unknown'
  			,position.getFileName() 
  			,position.getLineNumber()
  			,position.getColumnNumber()
  			);
  	});
}