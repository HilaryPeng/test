function moveup(e,data){
	if(e==0){
		this.$message({
			message: '该条信息已经在最顶部',
			type: 'warning',
			duration:1000
		});
	}else{
					//存储其ID 保证到时候从服务器取到的值是一样的
					let i=e;
					let obj={};
					obj=data[i-1];
					// console.log(obj);
					data[i-1]=data[i];
					data[i]=obj;
					this.$set(data,i,data[i]);
				}
			};
			function movedown(e,data){
				// console.log(this.tableDate.length);
				// console.log(e.$index)
				if(e==data.length-1){
					this.$message({
						message: '该条信息已经在最底部',
						type: 'warning',
						duration:1000
					});
				}else{
					let i=e;
					let obj={};
					obj=data[i+1];
					data[i+1]=data[i];
					data[i]=obj;
					this.$set(data,i,data[i]);
				}
			};
			function movetop(e,data){
				if(e==0){
					this.$message({
						message: '该条信息已经在最顶部',
						type: 'warning',
						duration:1000
					});
				}else{
					let i=e;
					let obj={};
					obj=data[i];
					//console.log(data[i]);
					data.splice(i,1);
					data.unshift(obj);
					this.$set(data,i,data[i]);
				}
			};
			function movebottom(e,data){
				if(e==data.length-1){
					this.$message({
						message: '该条信息已经在最底部',
						type: 'warning',
						duration:1000
					});
				}else{
					let i=e;
					let obj={};
					obj=data[i];
					data.splice(i,1);
					data.push(obj);
					this.$set(data,i,data[i]);
				}
			}
			export {moveup,movedown,movebottom,movetop};