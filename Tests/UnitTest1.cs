using API.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {

        }

        [TestInitialize]
        public void TestInit()
        {
           
        }

        [TestMethod]
        public async Task IndexReturnsARedirectToIndexHomeWhenIdIsNull()
        {
            // Arrange
            var controller = new ProductsController(null,null,null,null);

            // Act
            var result = await controller.GetProduct(id: 1);

            // Assert
      
        }

        [TestCleanup]
        public void TestClean()
        {

        }
    }
}
